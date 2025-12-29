import { PathfindingOptions, PathfindingGenerator, reconstructPath } from './base';

export function* dfs(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const stack: string[] = [start.id];
  const visited = new Set<string>();
  const cameFrom = new Map<string, string>();

  let visitedCount = 0;

  while (stack.length > 0) {
    const currentId = stack.pop()!;

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

    // Reverse to maintain consistent ordering
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const edge = neighbors[i];
      if (!visited.has(edge.to)) {
        cameFrom.set(edge.to, currentId);
        stack.push(edge.to);
      }
    }
  }

  yield { type: 'complete', path: [], visitedCount };
}
