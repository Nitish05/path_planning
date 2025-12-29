import { useState, useCallback } from 'react';
import { CityResult, OSMData, Graph, RoadSegment, BBox } from '../core/types';
import { fetchRoads } from '../services/overpass';
import { buildGraph, buildRoadSegments } from '../core/graph';
import { MAP_RENDER_SIZE } from '../renderer/MapRenderer';

interface UseGraphReturn {
  osmData: OSMData | null;
  graph: Graph | null;
  roadSegments: RoadSegment[];
  bounds: BBox | null;
  isLoading: boolean;
  error: string | null;
  loadCity: (city: CityResult) => Promise<void>;
  clear: () => void;
}

export function useGraph(): UseGraphReturn {
  const [osmData, setOsmData] = useState<OSMData | null>(null);
  const [graph, setGraph] = useState<Graph | null>(null);
  const [roadSegments, setRoadSegments] = useState<RoadSegment[]>([]);
  const [bounds, setBounds] = useState<BBox | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCity = useCallback(async (city: CityResult) => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch road data from Overpass API
      const data = await fetchRoads(city);
      setOsmData(data);
      setBounds(data.bounds);

      // Build graph from OSM data
      const newGraph = buildGraph(data);
      setGraph(newGraph);

      // Build road segments for rendering using fixed map size
      const segments = buildRoadSegments(data, data.bounds, MAP_RENDER_SIZE, MAP_RENDER_SIZE);
      setRoadSegments(segments);

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load city data';
      setError(message);
      console.error('Failed to load city:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clear = useCallback(() => {
    setOsmData(null);
    setGraph(null);
    setRoadSegments([]);
    setBounds(null);
    setError(null);
  }, []);

  return {
    osmData,
    graph,
    roadSegments,
    bounds,
    isLoading,
    error,
    loadCity,
    clear
  };
}
