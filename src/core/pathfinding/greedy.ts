import { PathfindingOptions, PathfindingGenerator, PriorityQueue, reconstructPath, heuristic } from './base';

export function* greedy(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const openSet = new PriorityQueue<string>();
  const visited = new Set<string>();
  const cameFrom = new Map<string, string>();

  openSet.push(start.id, heuristic(start, end));

  let visitedCount = 0;

  while (!openSet.isEmpty()) {
    const currentId = openSet.pop()!;

    if (visited.has(currentId)) continue;
    visited.add(currentId);

    const current = graph.nodes.get(currentId)!;
    visitedCount++;
    yield { type: 'visit', nodeId: currentId, node: current, visitedCount };

    if (currentId === end.id) {
      const path = reconstructPath(cameFrom, currentId, graph);
      yield { type: 'complete', path, visitedCount };
      return;
    }

    const neighbors = graph.adjacency.get(currentId) || [];

    for (const edge of neighbors) {
      if (!visited.has(edge.to)) {
        const neighbor = graph.nodes.get(edge.to)!;
        cameFrom.set(edge.to, currentId);
        openSet.push(edge.to, heuristic(neighbor, end));
      }
    }
  }

  yield { type: 'complete', path: [], visitedCount };
}
