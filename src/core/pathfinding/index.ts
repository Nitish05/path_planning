import { AlgorithmType, Graph, GraphNode } from '../types';
import { PathfindingGenerator, PathfindingOptions } from './base';
import { astar } from './astar';
import { dijkstra } from './dijkstra';
import { bfs } from './bfs';
import { dfs } from './dfs';
import { greedy } from './greedy';
import { bidirectional } from './bidirectional';
import { serializeGraph } from '../graph-serializer';
import { isWasmReady, WasmGraphHandle } from './wasm-loader';
import { createWasmSolver, wasmPathfinderGenerator } from './wasm-wrapper';

export type { PathfindingGenerator, PathfindingOptions };

// Global WASM graph handle (reused when same graph)
let currentWasmGraph: WasmGraphHandle | null = null;
let currentGraphId: string | null = null;

/**
 * Generate a unique ID for a graph based on its structure
 */
function getGraphId(graph: Graph): string {
  const nodeIds = Array.from(graph.nodes.keys());
  return `${nodeIds.length}-${nodeIds[0]}-${nodeIds[nodeIds.length - 1]}`;
}

/**
 * Create a pathfinder generator for the given algorithm.
 * Uses WASM implementation if available, falls back to JavaScript.
 */
export function createPathfinder(
  algorithm: AlgorithmType,
  graph: Graph,
  start: GraphNode,
  end: GraphNode,
  useWasm: boolean = true
): PathfindingGenerator {
  // Try WASM implementation if available and requested
  if (useWasm && isWasmReady()) {
    try {
      const graphId = getGraphId(graph);

      // Rebuild WASM graph if graph changed
      if (currentGraphId !== graphId || !currentWasmGraph) {
        currentWasmGraph?.free();
        const serialized = serializeGraph(graph);
        currentWasmGraph = new WasmGraphHandle(serialized);
        currentGraphId = graphId;
        console.log(`[WASM] Created graph with ${currentWasmGraph.nodeCount()} nodes`);
      }

      const solver = createWasmSolver(algorithm, currentWasmGraph, start.id, end.id);
      return wasmPathfinderGenerator(solver, graph);
    } catch (error) {
      console.warn('[WASM] Pathfinding failed, falling back to JS:', error);
    }
  }

  // Fallback to JavaScript implementation
  const options: PathfindingOptions = { graph, start, end };

  switch (algorithm) {
    case 'astar':
      return astar(options);
    case 'dijkstra':
      return dijkstra(options);
    case 'bfs':
      return bfs(options);
    case 'dfs':
      return dfs(options);
    case 'greedy':
      return greedy(options);
    case 'bidirectional':
      return bidirectional(options);
    default:
      return astar(options);
  }
}

/**
 * Clear the cached WASM graph (call when city changes)
 */
export function clearWasmGraph(): void {
  currentWasmGraph?.free();
  currentWasmGraph = null;
  currentGraphId = null;
}

export { astar, dijkstra, bfs, dfs, greedy, bidirectional };
