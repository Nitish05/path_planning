/**
 * Wraps WASM pathfinding solvers in Generator interface
 * for compatibility with the existing usePathfinding hook.
 */

import { PathfindingStep, GraphNode, Graph, AlgorithmType } from '../types';
import { PathfindingGenerator } from './base';
import {
  WasmGraphHandle,
  AStarSolver,
  DijkstraSolver,
  BfsSolver,
  DfsSolver,
  GreedySolver,
  BidirectionalSolver,
} from './wasm-loader';

// Union type for all WASM solvers
type WasmSolver =
  | AStarSolver
  | DijkstraSolver
  | BfsSolver
  | DfsSolver
  | GreedySolver
  | BidirectionalSolver;

// Interface for WASM step output
interface WasmStep {
  type: 'start' | 'visit' | 'complete';
  nodeId?: string;
  visitedCount?: number;
  fromDirection?: 'forward' | 'backward';
  path?: Array<{ id: string; lat: number; lon: number }>;
}

/**
 * Create a WASM solver for the given algorithm
 */
export function createWasmSolver(
  algorithm: AlgorithmType,
  graphHandle: WasmGraphHandle,
  startId: string,
  endId: string,
): WasmSolver {
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

/**
 * Convert a WASM step to a PathfindingStep
 */
function convertStep(wasmStep: WasmStep, graph: Graph): PathfindingStep {
  switch (wasmStep.type) {
    case 'start':
      return {
        type: 'start',
        nodeId: wasmStep.nodeId,
        node: wasmStep.nodeId ? graph.nodes.get(wasmStep.nodeId) : undefined,
      };

    case 'visit':
      return {
        type: 'visit',
        nodeId: wasmStep.nodeId,
        node: wasmStep.nodeId ? graph.nodes.get(wasmStep.nodeId) : undefined,
        visitedCount: wasmStep.visitedCount,
        fromDirection: wasmStep.fromDirection,
      };

    case 'complete':
      return {
        type: 'complete',
        path: wasmStep.path?.map(n => ({
          id: n.id,
          lat: n.lat,
          lon: n.lon,
        } as GraphNode)) ?? [],
        visitedCount: wasmStep.visitedCount,
      };

    default:
      throw new Error(`Unknown step type: ${(wasmStep as WasmStep).type}`);
  }
}

/**
 * Wraps a WASM solver in a Generator interface compatible with usePathfinding hook.
 * This allows the WASM algorithms to work with the existing visualization pipeline.
 */
export function* wasmPathfinderGenerator(
  solver: WasmSolver,
  graph: Graph,
): PathfindingGenerator {
  try {
    while (!solver.isDone()) {
      const wasmStep: WasmStep = solver.nextStep();
      const step = convertStep(wasmStep, graph);
      yield step;

      if (step.type === 'complete') {
        return;
      }
    }
  } finally {
    // Clean up the solver when done or if interrupted
    solver.free();
  }
}
