import { GraphNode } from '../types';
import { PathfindingOptions, PathfindingGenerator, PriorityQueue, heuristic } from './base';

export function* bidirectional(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

  // Heuristic caches for both directions
  const forwardHCache = new Map<string, number>();
  const backwardHCache = new Map<string, number>();

  const getForwardH = (nodeId: string): number => {
    let h = forwardHCache.get(nodeId);
    if (h === undefined) {
      h = heuristic(graph.nodes.get(nodeId)!, end);
      forwardHCache.set(nodeId, h);
    }
    return h;
  };

  const getBackwardH = (nodeId: string): number => {
    let h = backwardHCache.get(nodeId);
    if (h === undefined) {
      h = heuristic(graph.nodes.get(nodeId)!, start);
      backwardHCache.set(nodeId, h);
    }
    return h;
  };

  // Forward search state
  const forwardOpen = new PriorityQueue<string>();
  const forwardCameFrom = new Map<string, string>();
  const forwardG = new Map<string, number>();
  const forwardVisited = new Set<string>();

  // Backward search state
  const backwardOpen = new PriorityQueue<string>();
  const backwardCameFrom = new Map<string, string>();
  const backwardG = new Map<string, number>();
  const backwardVisited = new Set<string>();

  // Initialize forward search
  forwardG.set(start.id, 0);
  forwardOpen.push(start.id, getForwardH(start.id));

  // Initialize backward search
  backwardG.set(end.id, 0);
  backwardOpen.push(end.id, getBackwardH(end.id));

  let visitedCount = 0;
  let meetingNode: string | null = null;

  // Helper to reconstruct path when meeting point is found
  const reconstructPath = (meeting: string): GraphNode[] => {
    // Reconstruct forward path (build reversed, then reverse once)
    const forwardReversed: GraphNode[] = [];
    let node = meeting;
    while (forwardCameFrom.has(node)) {
      forwardReversed.push(graph.nodes.get(node)!);
      node = forwardCameFrom.get(node)!;
    }
    forwardReversed.push(graph.nodes.get(node)!);
    forwardReversed.reverse();

    // Reconstruct backward path
    const backwardPath: GraphNode[] = [];
    node = meeting;
    while (backwardCameFrom.has(node)) {
      node = backwardCameFrom.get(node)!;
      backwardPath.push(graph.nodes.get(node)!);
    }

    return [...forwardReversed, ...backwardPath];
  };

  while (!forwardOpen.isEmpty() || !backwardOpen.isEmpty()) {
    // Expand forward
    if (!forwardOpen.isEmpty()) {
      const currentId = forwardOpen.pop()!;

      if (!forwardVisited.has(currentId)) {
        forwardVisited.add(currentId);
        const current = graph.nodes.get(currentId)!;
        visitedCount++;
        yield { type: 'visit', nodeId: currentId, node: current, visitedCount, fromDirection: 'forward' };

        // Check if we've met the backward search - STOP IMMEDIATELY
        if (backwardVisited.has(currentId)) {
          meetingNode = currentId;
          const path = reconstructPath(meetingNode);
          yield { type: 'complete', path, visitedCount };
          return;
        }

        const neighbors = graph.adjacency.get(currentId) || [];
        const currentG = forwardG.get(currentId)!;
        for (const edge of neighbors) {
          const tentativeG = currentG + edge.weight;
          if (tentativeG < (forwardG.get(edge.to) ?? Infinity)) {
            forwardCameFrom.set(edge.to, currentId);
            forwardG.set(edge.to, tentativeG);
            forwardOpen.push(edge.to, tentativeG + getForwardH(edge.to));
          }
        }
      }
    }

    // Expand backward
    if (!backwardOpen.isEmpty()) {
      const currentId = backwardOpen.pop()!;

      if (!backwardVisited.has(currentId)) {
        backwardVisited.add(currentId);
        const current = graph.nodes.get(currentId)!;
        visitedCount++;
        yield { type: 'visit', nodeId: currentId, node: current, visitedCount, fromDirection: 'backward' };

        // Check if we've met the forward search - STOP IMMEDIATELY
        if (forwardVisited.has(currentId)) {
          meetingNode = currentId;
          const path = reconstructPath(meetingNode);
          yield { type: 'complete', path, visitedCount };
          return;
        }

        const neighbors = graph.adjacency.get(currentId) || [];
        const currentG = backwardG.get(currentId)!;
        for (const edge of neighbors) {
          const tentativeG = currentG + edge.weight;
          if (tentativeG < (backwardG.get(edge.to) ?? Infinity)) {
            backwardCameFrom.set(edge.to, currentId);
            backwardG.set(edge.to, tentativeG);
            backwardOpen.push(edge.to, tentativeG + getBackwardH(edge.to));
          }
        }
      }
    }
  }

  // No path found
  yield { type: 'complete', path: [], visitedCount };
}
