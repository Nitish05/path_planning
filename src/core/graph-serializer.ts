/**
 * Serializes a Graph to a format suitable for WASM consumption.
 * Converts Maps to arrays for efficient transfer to Rust.
 */

import { Graph } from './types';

export interface SerializedNode {
  id: string;
  lat: number;
  lon: number;
}

export interface SerializedEdge {
  to: string;
  weight: number;
}

export interface AdjacencyEntry {
  from: string;
  edges: SerializedEdge[];
}

export interface SerializedGraph {
  nodes: SerializedNode[];
  adjacency: AdjacencyEntry[];
}

/**
 * Convert a Graph to a serialized format for WASM
 */
export function serializeGraph(graph: Graph): SerializedGraph {
  const nodes: SerializedNode[] = [];
  const adjacency: AdjacencyEntry[] = [];

  // Convert nodes Map to array
  for (const [, node] of graph.nodes) {
    nodes.push({
      id: node.id,
      lat: node.lat,
      lon: node.lon,
    });
  }

  // Convert adjacency Map to array
  for (const [from, edges] of graph.adjacency) {
    adjacency.push({
      from,
      edges: edges.map(e => ({
        to: e.to,
        weight: e.weight,
      })),
    });
  }

  return { nodes, adjacency };
}
