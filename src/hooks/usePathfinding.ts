import { useState, useCallback, useRef, useEffect } from 'react';
import { Graph, GraphNode, AlgorithmType, PathfindingStep } from '../core/types';
import { createPathfinder, PathfindingGenerator } from '../core/pathfinding';

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
}

export function usePathfinding(): UsePathfindingReturn {
  const [isRunning, setIsRunning] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [currentPath, setCurrentPath] = useState<GraphNode[]>([]);
  const [visitedCount, setVisitedCount] = useState(0);
  const [speed, setSpeed] = useState(50);

  const generatorRef = useRef<PathfindingGenerator | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stepCallbackRef = useRef<((step: PathfindingStep) => void) | null>(null);
  const stepsPerFrameRef = useRef(1);

  // Calculate steps per frame based on speed
  useEffect(() => {
    // Speed 1 = 1 step per frame, speed 100 = 100 steps per frame
    stepsPerFrameRef.current = Math.max(1, Math.floor(speed / 2));
  }, [speed]);

  const runStep = useCallback(() => {
    if (!generatorRef.current) return;

    try {
      const stepsPerFrame = stepsPerFrameRef.current;

      for (let i = 0; i < stepsPerFrame; i++) {
        const result = generatorRef.current.next();

        if (result.done) {
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

    // Create new pathfinder generator
    generatorRef.current = createPathfinder(algorithm, graph, startNode, endNode);
    setIsRunning(true);

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(runStep);
  }, [runStep]);

  const stop = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setVisitedNodes(new Set());
    setCurrentPath([]);
    setVisitedCount(0);
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
    onStep
  };
}
