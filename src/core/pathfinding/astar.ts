import { PathfindingOptions, PathfindingGenerator, PriorityQueue, reconstructPath, heuristic } from './base';

export function* astar(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  const openSet = new PriorityQueue<string>();
  const cameFrom = new Map<string, string>();
  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();
  const inOpenSet = new Set<string>();

  gScore.set(start.id, 0);
  fScore.set(start.id, heuristic(start, end));
  openSet.push(start.id, fScore.get(start.id)!);
  inOpenSet.add(start.id);

  let visitedCount = 0;

  while (!openSet.isEmpty()) {
    const currentId = openSet.pop()!;
    inOpenSet.delete(currentId);
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
      const tentativeG = (gScore.get(currentId) ?? Infinity) + edge.weight;
      const neighborG = gScore.get(edge.to) ?? Infinity;

      if (tentativeG < neighborG) {
        cameFrom.set(edge.to, currentId);
        gScore.set(edge.to, tentativeG);

        const neighbor = graph.nodes.get(edge.to);
        if (!neighbor) continue;

        const f = tentativeG + heuristic(neighbor, end);
        fScore.set(edge.to, f);

        if (!inOpenSet.has(edge.to)) {
          openSet.push(edge.to, f);
          inOpenSet.add(edge.to);
        }
      }
    }
  }

  // No path found
  yield { type: 'complete', path: [], visitedCount };
}
