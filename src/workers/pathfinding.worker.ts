/**
 * Web Worker for instant mode pathfinding.
 * Runs the entire algorithm in a separate thread and returns the result.
 */

import init, {
  WasmGraphHandle,
  AStarSolver,
  DijkstraSolver,
  BfsSolver,
  DfsSolver,
  GreedySolver,
  BidirectionalSolver,
} from '../../wasm/pkg/pathfinding_wasm';

import type { AlgorithmType } from '../core/types';
import type { SerializedGraph } from '../core/graph-serializer';

interface WorkerRequest {
  type: 'run';
  graph: SerializedGraph;
  startId: string;
  endId: string;
  algorithm: AlgorithmType;
}

interface WorkerResponse {
  type: 'result';
  path: Array<{ id: string; lat: number; lon: number }>;
  visitedNodes: Array<{ id: string; lat: number; lon: number }>;
  visitedCount: number;
  timeMs: number;
}

interface WorkerError {
  type: 'error';
  message: string;
}

let wasmInitialized = false;

async function ensureWasmInitialized(): Promise<void> {
  if (!wasmInitialized) {
    await init();
    wasmInitialized = true;
  }
}

function createSolver(
  algorithm: AlgorithmType,
  graphHandle: WasmGraphHandle,
  startId: string,
  endId: string
) {
  switch (algorithm) {
    case 'astar':
      return new AStarSolver(graphHandle, startId, endId);
    case 'dijkstra':
      return new DijkstraSolver(graphHandle, startId, endId);
    case 'bfs':
      return new BfsSolver(graphHandle, startId, endId);
    case 'dfs':
      return new DfsSolver(graphHandle, startId, endId);
    case 'greedy':
      return new GreedySolver(graphHandle, startId, endId);
    case 'bidirectional':
      return new BidirectionalSolver(graphHandle, startId, endId);
    default:
      return new AStarSolver(graphHandle, startId, endId);
  }
}

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const { type, graph, startId, endId, algorithm } = event.data;

  if (type !== 'run') {
    return;
  }

  try {
    await ensureWasmInitialized();

    const startTime = performance.now();

    // Create graph handle
    const graphHandle = new WasmGraphHandle(graph);

    // Create and run solver
    const solver = createSolver(algorithm, graphHandle, startId, endId);
    const result = solver.runToCompletion();

    const endTime = performance.now();

    // Clean up
    solver.free();
    graphHandle.free();

    // Send result
    const response: WorkerResponse = {
      type: 'result',
      path: result.path || [],
      visitedNodes: result.visitedNodes || [],
      visitedCount: result.visitedCount || 0,
      timeMs: endTime - startTime,
    };

    self.postMessage(response);
  } catch (error) {
    const errorResponse: WorkerError = {
      type: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
    };
    self.postMessage(errorResponse);
  }
};
