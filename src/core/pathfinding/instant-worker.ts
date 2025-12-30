/**
 * Helper to manage the instant mode Web Worker.
 */

import { Graph, GraphNode, AlgorithmType } from '../types';
import { serializeGraph } from '../graph-serializer';
// Import worker using Vite's ?worker syntax for proper bundling
import PathfindingWorker from '../../workers/pathfinding.worker?worker';

interface WorkerResult {
  path: GraphNode[];
  visitedNodes: GraphNode[];
  visitedCount: number;
  timeMs: number;
}

let worker: Worker | null = null;

function getOrCreateWorker(): Worker {
  if (!worker) {
    worker = new PathfindingWorker();
  }
  return worker;
}

/**
 * Run pathfinding in instant mode using a Web Worker.
 * Returns a promise that resolves with the final path.
 */
export function runInstantPathfinding(
  graph: Graph,
  start: GraphNode,
  end: GraphNode,
  algorithm: AlgorithmType
): Promise<WorkerResult> {
  return new Promise((resolve, reject) => {
    const w = getOrCreateWorker();

    const handleMessage = (event: MessageEvent) => {
      w.removeEventListener('message', handleMessage);
      w.removeEventListener('error', handleError);

      if (event.data.type === 'result') {
        // Convert path nodes back to GraphNode format
        const path: GraphNode[] = event.data.path.map((n: { id: string; lat: number; lon: number }) => ({
          id: n.id,
          lat: n.lat,
          lon: n.lon,
        }));

        // Convert visited nodes for replay visualization
        const visitedNodes: GraphNode[] = event.data.visitedNodes.map((n: { id: string; lat: number; lon: number }) => ({
          id: n.id,
          lat: n.lat,
          lon: n.lon,
        }));

        resolve({
          path,
          visitedNodes,
          visitedCount: event.data.visitedCount,
          timeMs: event.data.timeMs,
        });
      } else if (event.data.type === 'error') {
        reject(new Error(event.data.message));
      }
    };

    const handleError = (error: ErrorEvent) => {
      w.removeEventListener('message', handleMessage);
      w.removeEventListener('error', handleError);
      reject(new Error(error.message));
    };

    w.addEventListener('message', handleMessage);
    w.addEventListener('error', handleError);

    // Serialize and send to worker
    const serializedGraph = serializeGraph(graph);
    w.postMessage({
      type: 'run',
      graph: serializedGraph,
      startId: start.id,
      endId: end.id,
      algorithm,
    });
  });
}

/**
 * Terminate the worker (call on cleanup)
 */
export function terminateWorker(): void {
  if (worker) {
    worker.terminate();
    worker = null;
  }
}
