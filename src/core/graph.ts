import { OSMData, Graph, GraphNode, GraphEdge, RoadSegment, BBox, Point } from './types';

// Haversine formula to calculate distance between two lat/lon points
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000; // Earth's radius in meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Project lat/lon to screen coordinates
export function projectToScreen(
  lat: number,
  lon: number,
  bounds: BBox,
  width: number,
  height: number,
  padding: number = 20
): Point {
  const effectiveWidth = width - 2 * padding;
  const effectiveHeight = height - 2 * padding;

  const x = padding + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * effectiveWidth;
  const y = padding + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * effectiveHeight;

  return { x, y };
}

// Create a unique node ID from coordinates (for finding intersections)
function coordsToId(lat: number, lon: number): string {
  // Round to ~1 meter precision for intersection detection
  return `${lat.toFixed(5)},${lon.toFixed(5)}`;
}

export function buildGraph(osmData: OSMData): Graph {
  const nodes = new Map<string, GraphNode>();
  const edges: GraphEdge[] = [];
  const adjacency = new Map<string, GraphEdge[]>();

  // First pass: identify all intersection nodes (nodes that appear in multiple ways)
  const nodeUsage = new Map<string, number>();

  for (const way of osmData.ways) {
    for (const point of way.geometry) {
      const id = coordsToId(point.lat, point.lon);
      nodeUsage.set(id, (nodeUsage.get(id) || 0) + 1);
    }
    // Always include first and last nodes
    if (way.geometry.length > 0) {
      const first = way.geometry[0];
      const last = way.geometry[way.geometry.length - 1];
      nodeUsage.set(coordsToId(first.lat, first.lon), 2);
      nodeUsage.set(coordsToId(last.lat, last.lon), 2);
    }
  }

  // Second pass: build graph with intersections as nodes
  for (const way of osmData.ways) {
    const geometry = way.geometry;
    if (geometry.length < 2) continue;

    let segmentStart = 0;

    for (let i = 0; i < geometry.length; i++) {
      const point = geometry[i];
      const nodeId = coordsToId(point.lat, point.lon);
      const isIntersection = (nodeUsage.get(nodeId) || 0) > 1;
      const isEndpoint = i === 0 || i === geometry.length - 1;

      // Add node to graph if it's an intersection or endpoint
      if (isIntersection || isEndpoint) {
        if (!nodes.has(nodeId)) {
          nodes.set(nodeId, {
            id: nodeId,
            lat: point.lat,
            lon: point.lon
          });
        }

        // Create edge from segment start to current node
        if (i > segmentStart) {
          const startPoint = geometry[segmentStart];
          const startId = coordsToId(startPoint.lat, startPoint.lon);

          // Calculate total distance along segment
          let distance = 0;
          for (let j = segmentStart; j < i; j++) {
            distance += haversineDistance(
              geometry[j].lat,
              geometry[j].lon,
              geometry[j + 1].lat,
              geometry[j + 1].lon
            );
          }

          // Add edge in both directions (undirected graph)
          const edgeForward: GraphEdge = {
            from: startId,
            to: nodeId,
            weight: distance,
            wayId: way.id
          };

          const edgeBackward: GraphEdge = {
            from: nodeId,
            to: startId,
            weight: distance,
            wayId: way.id
          };

          edges.push(edgeForward, edgeBackward);

          // Update adjacency list
          if (!adjacency.has(startId)) adjacency.set(startId, []);
          if (!adjacency.has(nodeId)) adjacency.set(nodeId, []);
          adjacency.get(startId)!.push(edgeForward);
          adjacency.get(nodeId)!.push(edgeBackward);
        }

        segmentStart = i;
      }
    }
  }

  return { nodes, edges, adjacency };
}

export function buildRoadSegments(osmData: OSMData, bounds: BBox, width: number, height: number): RoadSegment[] {
  const segments: RoadSegment[] = [];

  for (const way of osmData.ways) {
    const points: Point[] = way.geometry.map(p =>
      projectToScreen(p.lat, p.lon, bounds, width, height)
    );

    segments.push({
      points,
      wayId: way.id,
      highway: way.tags.highway || 'unknown'
    });
  }

  return segments;
}

export function findNearestNode(
  graph: Graph,
  lat: number,
  lon: number
): GraphNode | null {
  let nearestNode: GraphNode | null = null;
  let minDistance = Infinity;

  for (const node of graph.nodes.values()) {
    const distance = haversineDistance(lat, lon, node.lat, node.lon);
    if (distance < minDistance) {
      minDistance = distance;
      nearestNode = node;
    }
  }

  return nearestNode;
}

export function findNearestNodeByScreen(
  graph: Graph,
  x: number,
  y: number,
  bounds: BBox,
  width: number,
  height: number,
  maxDistance: number = 30
): GraphNode | null {
  let nearestNode: GraphNode | null = null;
  let minDistance = Infinity;

  for (const node of graph.nodes.values()) {
    const projected = projectToScreen(node.lat, node.lon, bounds, width, height);
    const dx = x - projected.x;
    const dy = y - projected.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < minDistance && distance < maxDistance) {
      minDistance = distance;
      nearestNode = node;
    }
  }

  return nearestNode;
}

// Fast heuristic for A* using equirectangular approximation
// Much faster than Haversine (no trig functions), still admissible
export function heuristic(node: GraphNode, goal: GraphNode): number {
  const R = 6371000; // Earth's radius in meters
  const DEG_TO_RAD = Math.PI / 180;

  // Equirectangular approximation - fast and accurate for small distances
  const avgLat = (node.lat + goal.lat) / 2 * DEG_TO_RAD;
  const cosLat = Math.cos(avgLat);  // Only one trig call vs 6+ in Haversine

  const dx = (goal.lon - node.lon) * DEG_TO_RAD * cosLat;
  const dy = (goal.lat - node.lat) * DEG_TO_RAD;

  return R * Math.sqrt(dx * dx + dy * dy);
}
