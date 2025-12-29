import { Graph, GraphNode, PathfindingStep } from '../types';
import { heuristic } from '../graph';

export type PathfindingGenerator = Generator<PathfindingStep, void, unknown>;

export interface PathfindingOptions {
  graph: Graph;
  start: GraphNode;
  end: GraphNode;
}

// Min-heap priority queue implementation
export class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  push(value: T, priority: number): void {
    this.heap.push({ priority, value });
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const result = this.heap[0].value;
    const last = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < length && this.heap[leftChild].priority < this.heap[smallest].priority) {
        smallest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild].priority < this.heap[smallest].priority) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// Reconstruct path from parent map
export function reconstructPath(
  cameFrom: Map<string, string>,
  current: string,
  graph: Graph
): GraphNode[] {
  const path: GraphNode[] = [];
  let node = current;

  while (cameFrom.has(node)) {
    path.unshift(graph.nodes.get(node)!);
    node = cameFrom.get(node)!;
  }
  path.unshift(graph.nodes.get(node)!);

  return path;
}

// Export heuristic for algorithms
export { heuristic };
