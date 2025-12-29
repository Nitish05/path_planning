import { PathfindingOptions, PathfindingGenerator, PriorityQueue, reconstructPath, heuristic } from './base';

export function* astar(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const openSet = new PriorityQueue<string>();
  const cameFrom = new Map<string, string>();
  const gScore = new Map<string, number>();
  const closedSet = new Set<string>();  // Track processed nodes
  const hCache = new Map<string, number>();  // Cache heuristic values

  // Cached heuristic lookup
  const getHeuristic = (nodeId: string): number => {
    let h = hCache.get(nodeId);
    if (h === undefined) {
      const node = graph.nodes.get(nodeId)!;
      h = heuristic(node, end);
      hCache.set(nodeId, h);
    }
    return h;
  };

  gScore.set(start.id, 0);
  openSet.push(start.id, getHeuristic(start.id));

  let visitedCount = 0;

  while (!openSet.isEmpty()) {
    const currentId = openSet.pop()!;

    // Skip if already processed (closed)
    if (closedSet.has(currentId)) continue;
    closedSet.add(currentId);

    const current = graph.nodes.get(currentId)!;

    visitedCount++;
    yield { type: 'visit', nodeId: currentId, node: current, visitedCount };

    if (currentId === end.id) {
      const path = reconstructPath(cameFrom, currentId, graph);
      yield { type: 'complete', path, visitedCount };
      return;
    }

    const neighbors = graph.adjacency.get(currentId) || [];
    const currentG = gScore.get(currentId)!;

    for (const edge of neighbors) {
      // Skip already processed nodes
      if (closedSet.has(edge.to)) continue;

      const tentativeG = currentG + edge.weight;
      const neighborG = gScore.get(edge.to) ?? Infinity;

      if (tentativeG < neighborG) {
        cameFrom.set(edge.to, currentId);
        gScore.set(edge.to, tentativeG);

        const f = tentativeG + getHeuristic(edge.to);
        openSet.push(edge.to, f);
      }
    }
  }

  // No path found
  yield { type: 'complete', path: [], visitedCount };
}
