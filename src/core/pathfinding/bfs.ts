import { PathfindingOptions, PathfindingGenerator, reconstructPath } from './base';

export function* bfs(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const queue: string[] = [start.id];
  const visited = new Set<string>([start.id]);
  const cameFrom = new Map<string, string>();

  let visitedCount = 0;

  while (queue.length > 0) {
    const currentId = queue.shift()!;
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
        visited.add(edge.to);
        cameFrom.set(edge.to, currentId);
        queue.push(edge.to);
      }
    }
  }

  yield { type: 'complete', path: [], visitedCount };
}
