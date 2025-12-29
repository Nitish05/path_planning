import { useState, useCallback } from 'react';
import { Graph, GraphNode, BBox } from '../core/types';
import { findNearestNodeByScreen } from '../core/graph';
import { MAP_RENDER_SIZE } from '../renderer/MapRenderer';

interface UseMapInteractionReturn {
  startNode: GraphNode | null;
  endNode: GraphNode | null;
  handleClick: (mapX: number, mapY: number) => void;
  reset: () => void;
  setStartNode: (node: GraphNode | null) => void;
  setEndNode: (node: GraphNode | null) => void;
}

export function useMapInteraction(
  graph: Graph | null,
  bounds: BBox | null
): UseMapInteractionReturn {
  const [startNode, setStartNode] = useState<GraphNode | null>(null);
  const [endNode, setEndNode] = useState<GraphNode | null>(null);

  // handleClick receives map coordinates (already converted from screen coordinates)
  const handleClick = useCallback((mapX: number, mapY: number) => {
    if (!graph || !bounds) return;

    const nearestNode = findNearestNodeByScreen(graph, mapX, mapY, bounds, MAP_RENDER_SIZE, MAP_RENDER_SIZE, 50);
    if (!nearestNode) return;

    if (!startNode) {
      setStartNode(nearestNode);
    } else if (!endNode) {
      setEndNode(nearestNode);
    } else {
      // Reset and set new start
      setStartNode(nearestNode);
      setEndNode(null);
    }
  }, [graph, bounds, startNode, endNode]);

  const reset = useCallback(() => {
    setStartNode(null);
    setEndNode(null);
  }, []);

  return {
    startNode,
    endNode,
    handleClick,
    reset,
    setStartNode,
    setEndNode
  };
}
