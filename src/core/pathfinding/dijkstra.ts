import { PathfindingOptions, PathfindingGenerator, PriorityQueue, reconstructPath } from './base';

export function* dijkstra(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const openSet = new PriorityQueue<string>();
  const cameFrom = new Map<string, string>();
  const distance = new Map<string, number>();
  const visited = new Set<string>();

  distance.set(start.id, 0);
  openSet.push(start.id, 0);

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
      if (visited.has(edge.to)) continue;

      const newDist = (distance.get(currentId) ?? Infinity) + edge.weight;
      const currentDist = distance.get(edge.to) ?? Infinity;

      if (newDist < currentDist) {
        cameFrom.set(edge.to, currentId);
        distance.set(edge.to, newDist);
        openSet.push(edge.to, newDist);
      }
    }
  }

  yield { type: 'complete', path: [], visitedCount };
}
