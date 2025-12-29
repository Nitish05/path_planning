import { GraphNode } from '../types';
import { PathfindingOptions, PathfindingGenerator, PriorityQueue, heuristic } from './base';

export function* bidirectional(options: PathfindingOptions): PathfindingGenerator {
  const { graph, start, end } = options;

  yield { type: 'start', nodeId: start.id, node: start };

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
  forwardOpen.push(start.id, heuristic(start, end));

  // Initialize backward search
  backwardG.set(end.id, 0);
  backwardOpen.push(end.id, heuristic(end, start));

  let visitedCount = 0;
  let bestPath: GraphNode[] | null = null;
  let bestCost = Infinity;
  let meetingNode: string | null = null;

  while (!forwardOpen.isEmpty() || !backwardOpen.isEmpty()) {
    // Expand forward
    if (!forwardOpen.isEmpty()) {
      const currentId = forwardOpen.pop()!;

      if (!forwardVisited.has(currentId)) {
        forwardVisited.add(currentId);
        const current = graph.nodes.get(currentId)!;
        visitedCount++;
        yield { type: 'visit', nodeId: currentId, node: current, visitedCount, fromDirection: 'forward' };

        // Check if we've met the backward search
        if (backwardVisited.has(currentId)) {
          const pathCost = (forwardG.get(currentId) || 0) + (backwardG.get(currentId) || 0);
          if (pathCost < bestCost) {
            bestCost = pathCost;
            meetingNode = currentId;
          }
        }

        const neighbors = graph.adjacency.get(currentId) || [];
        for (const edge of neighbors) {
          const tentativeG = (forwardG.get(currentId) ?? Infinity) + edge.weight;
          if (tentativeG < (forwardG.get(edge.to) ?? Infinity)) {
            forwardCameFrom.set(edge.to, currentId);
            forwardG.set(edge.to, tentativeG);
            const neighbor = graph.nodes.get(edge.to)!;
            forwardOpen.push(edge.to, tentativeG + heuristic(neighbor, end));
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

        // Check if we've met the forward search
        if (forwardVisited.has(currentId)) {
          const pathCost = (forwardG.get(currentId) || 0) + (backwardG.get(currentId) || 0);
          if (pathCost < bestCost) {
            bestCost = pathCost;
            meetingNode = currentId;
          }
        }

        const neighbors = graph.adjacency.get(currentId) || [];
        for (const edge of neighbors) {
          const tentativeG = (backwardG.get(currentId) ?? Infinity) + edge.weight;
          if (tentativeG < (backwardG.get(edge.to) ?? Infinity)) {
            backwardCameFrom.set(edge.to, currentId);
            backwardG.set(edge.to, tentativeG);
            const neighbor = graph.nodes.get(edge.to)!;
            backwardOpen.push(edge.to, tentativeG + heuristic(neighbor, start));
          }
        }
      }
    }

    // Early termination check
    if (meetingNode !== null) {
      // Reconstruct path
      const forwardPath: GraphNode[] = [];
      let node = meetingNode;
      while (forwardCameFrom.has(node)) {
        forwardPath.unshift(graph.nodes.get(node)!);
        node = forwardCameFrom.get(node)!;
      }
      forwardPath.unshift(graph.nodes.get(node)!);

      const backwardPath: GraphNode[] = [];
      node = meetingNode;
      while (backwardCameFrom.has(node)) {
        node = backwardCameFrom.get(node)!;
        backwardPath.push(graph.nodes.get(node)!);
      }

      bestPath = [...forwardPath, ...backwardPath];
      break;
    }
  }

  if (bestPath) {
    yield { type: 'complete', path: bestPath, visitedCount };
  } else {
    yield { type: 'complete', path: [], visitedCount };
  }
}
