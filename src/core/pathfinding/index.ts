import { AlgorithmType, Graph, GraphNode } from '../types';
import { PathfindingGenerator, PathfindingOptions } from './base';
import { astar } from './astar';
import { dijkstra } from './dijkstra';
import { bfs } from './bfs';
import { dfs } from './dfs';
import { greedy } from './greedy';
import { bidirectional } from './bidirectional';

export type { PathfindingGenerator, PathfindingOptions };

export function createPathfinder(
  algorithm: AlgorithmType,
  graph: Graph,
  start: GraphNode,
  end: GraphNode
): PathfindingGenerator {
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

export { astar, dijkstra, bfs, dfs, greedy, bidirectional };
