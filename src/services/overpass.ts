import { OSMData, OSMWay, OSMNode, BBox, CityResult } from '../core/types';

const OVERPASS_API = 'https://overpass-api.de/api/interpreter';

function buildQuery(city: CityResult): string {
  // Use bounding box for the query
  const [minLat, maxLat, minLon, maxLon] = city.boundingBox;

  // Query all road types within the bounding box
  return `
    [out:json][timeout:120];
    (
      way["highway"~"^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link|tertiary|tertiary_link|residential|unclassified|living_street)$"]
        (${minLat},${minLon},${maxLat},${maxLon});
    );
    out body geom;
  `.trim();
}

export async function fetchRoads(city: CityResult): Promise<OSMData> {
  const query = buildQuery(city);

  const response = await fetch(OVERPASS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `data=${encodeURIComponent(query)}`
  });

  if (!response.ok) {
    throw new Error(`Overpass API error: ${response.status}`);
  }

  const data = await response.json();
  return parseOverpassResponse(data, city.boundingBox);
}

function parseOverpassResponse(
  data: { elements: Array<Record<string, unknown>> },
  boundingBox: [string, string, string, string]
): OSMData {
  const nodes = new Map<number, OSMNode>();
  const ways: OSMWay[] = [];

  const [minLat, maxLat, minLon, maxLon] = boundingBox.map(parseFloat);
  const bounds: BBox = { minLat, maxLat, minLon, maxLon };

  for (const element of data.elements) {
    if (element.type === 'way' && element.geometry) {
      const geometry = element.geometry as Array<{ lat: number; lon: number }>;
      const nodeIds: number[] = [];

      // Extract nodes from geometry
      geometry.forEach((point, index) => {
        const nodeId = element.id as number * 1000 + index;
        nodes.set(nodeId, {
          id: nodeId,
          lat: point.lat,
          lon: point.lon
        });
        nodeIds.push(nodeId);
      });

      ways.push({
        id: element.id as number,
        nodes: nodeIds,
        geometry: geometry.map(p => ({ lat: p.lat, lon: p.lon })),
        tags: (element.tags as Record<string, string>) || {}
      });
    }
  }

  return { nodes, ways, bounds };
}

export function getQueryUrl(city: CityResult): string {
  const query = buildQuery(city);
  return `${OVERPASS_API}?data=${encodeURIComponent(query)}`;
}
