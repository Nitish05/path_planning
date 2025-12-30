import { useState, useCallback, useRef, useEffect } from 'react';
import { Graph, GraphNode, AlgorithmType, PathfindingStep } from '../core/types';
import { createPathfinder, PathfindingGenerator } from '../core/pathfinding';
import { runInstantPathfinding, terminateWorker } from '../core/pathfinding/instant-worker';

interface UsePathfindingReturn {
  isRunning: boolean;
  visitedNodes: Set<string>;
  currentPath: GraphNode[];
  visitedCount: number;
  start: (graph: Graph, startNode: GraphNode, endNode: GraphNode, algorithm: AlgorithmType) => void;
  stop: () => void;
  reset: () => void;
  speed: number;
  setSpeed: (speed: number) => void;
  onStep: (callback: (step: PathfindingStep) => void) => void;
  instantMode: boolean;
  setInstantMode: (instant: boolean) => void;
  executionTime: number | null;
}

export function usePathfinding(): UsePathfindingReturn {
  const [isRunning, setIsRunning] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [currentPath, setCurrentPath] = useState<GraphNode[]>([]);
  const [visitedCount, setVisitedCount] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [instantMode, setInstantMode] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const generatorRef = useRef<PathfindingGenerator | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stepCallbackRef = useRef<((step: PathfindingStep) => void) | null>(null);
  const stepsPerFrameRef = useRef(1);
  const startTimeRef = useRef<number | null>(null);

  // For instant mode fast replay
  const replayDataRef = useRef<{
    visitedNodes: GraphNode[];
    path: GraphNode[];
    visitedCount: number;
    timeMs: number;
    currentIndex: number;
  } | null>(null);

  // Calculate steps per frame based on speed
  useEffect(() => {
    // Speed 1 = 1 step per frame, speed 100 = 100 steps per frame
    stepsPerFrameRef.current = Math.max(1, Math.floor(speed / 2));
  }, [speed]);

  // Fast replay animation for instant mode
  const runReplayFrame = useCallback(() => {
    const data = replayDataRef.current;
    if (!data) return;

    // Show many nodes per frame for fast replay (500-1000 nodes per frame)
    const nodesPerFrame = Math.max(100, Math.ceil(data.visitedNodes.length / 60)); // Complete in ~1 second at 60fps

    const endIndex = Math.min(data.currentIndex + nodesPerFrame, data.visitedNodes.length);

    // Emit visit steps for this batch
    for (let i = data.currentIndex; i < endIndex; i++) {
      const node = data.visitedNodes[i];
      if (stepCallbackRef.current) {
        stepCallbackRef.current({
          type: 'visit',
          nodeId: node.id,
          node,
          visitedCount: i + 1,
        });
      }
    }

    setVisitedCount(endIndex);
    data.currentIndex = endIndex;

    if (endIndex >= data.visitedNodes.length) {
      // Replay complete - show the path
      setCurrentPath(data.path);
      setExecutionTime(data.timeMs);
      setIsRunning(false);

      // Emit complete step
      if (stepCallbackRef.current) {
        stepCallbackRef.current({
          type: 'complete',
          path: data.path,
          visitedCount: data.visitedCount,
        });
      }

      replayDataRef.current = null;
      console.log(`[Instant Mode] Completed in ${data.timeMs.toFixed(2)}ms, visited ${data.visitedCount} nodes`);
    } else {
      // Continue replay
      animationFrameRef.current = requestAnimationFrame(runReplayFrame);
    }
  }, []);

  const runStep = useCallback(() => {
    if (!generatorRef.current) return;

    try {
      const stepsPerFrame = stepsPerFrameRef.current;

      for (let i = 0; i < stepsPerFrame; i++) {
        const result = generatorRef.current.next();

        if (result.done) {
          // Calculate execution time for single-threaded mode
          if (startTimeRef.current !== null) {
            const elapsed = performance.now() - startTimeRef.current;
            setExecutionTime(elapsed);
            startTimeRef.current = null;
          }
          setIsRunning(false);
          return;
        }

        const step = result.value;

        if (step.type === 'visit' && step.nodeId) {
          setVisitedNodes(prev => new Set(prev).add(step.nodeId!));
          setVisitedCount(step.visitedCount || 0);
        } else if (step.type === 'complete' && step.path) {
          setCurrentPath(step.path);
          setVisitedCount(step.visitedCount || 0);
        }

        if (stepCallbackRef.current) {
          stepCallbackRef.current(step);
        }

        if (step.type === 'complete') {
          // Calculate execution time for single-threaded mode
          if (startTimeRef.current !== null) {
            const elapsed = performance.now() - startTimeRef.current;
            setExecutionTime(elapsed);
            startTimeRef.current = null;
          }
          setIsRunning(false);
          return;
        }
      }

      animationFrameRef.current = requestAnimationFrame(runStep);
    } catch (error) {
      console.error('Pathfinding error:', error);
      setIsRunning(false);
    }
  }, []);

  const start = useCallback((
    graph: Graph,
    startNode: GraphNode,
    endNode: GraphNode,
    algorithm: AlgorithmType
  ) => {
    // Reset state
    setVisitedNodes(new Set());
    setCurrentPath([]);
    setVisitedCount(0);
    setExecutionTime(null);

    if (instantMode) {
      // Use Web Worker for instant mode
      setIsRunning(true);

      runInstantPathfinding(graph, startNode, endNode, algorithm)
        .then((result) => {
          // Start fast replay animation
          replayDataRef.current = {
            visitedNodes: result.visitedNodes,
            path: result.path,
            visitedCount: result.visitedCount,
            timeMs: result.timeMs,
            currentIndex: 0,
          };
          animationFrameRef.current = requestAnimationFrame(runReplayFrame);
        })
        .catch((error) => {
          console.error('Instant mode error:', error);
          setIsRunning(false);
        });
    } else {
      // Use step-by-step visualization
      generatorRef.current = createPathfinder(algorithm, graph, startNode, endNode);
      startTimeRef.current = performance.now();
      setIsRunning(true);
      animationFrameRef.current = requestAnimationFrame(runStep);
    }
  }, [runStep, runReplayFrame, instantMode]);

  const stop = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    startTimeRef.current = null;
    replayDataRef.current = null;
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setVisitedNodes(new Set());
    setCurrentPath([]);
    setVisitedCount(0);
    setExecutionTime(null);
    generatorRef.current = null;
  }, [stop]);

  const onStep = useCallback((callback: (step: PathfindingStep) => void) => {
    stepCallbackRef.current = callback;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      terminateWorker();
    };
  }, []);

  return {
    isRunning,
    visitedNodes,
    currentPath,
    visitedCount,
    start,
    stop,
    reset,
    speed,
    setSpeed,
    onStep,
    instantMode,
    setInstantMode,
    executionTime
  };
}
