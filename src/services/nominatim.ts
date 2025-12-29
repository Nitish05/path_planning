import { CityResult } from '../core/types';

const NOMINATIM_API = 'https://nominatim.openstreetmap.org';

export async function searchCity(query: string): Promise<CityResult[]> {
  if (!query.trim()) return [];

  const params = new URLSearchParams({
    q: query,
    format: 'json',
    addressdetails: '1',
    limit: '5',
    featuretype: 'city,town,village'
  });

  const response = await fetch(`${NOMINATIM_API}/search?${params}`, {
    headers: {
      'User-Agent': 'PathPlanningVisualizer/1.0'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to search for city');
  }

  const data = await response.json();

  return data
    .filter((item: Record<string, unknown>) =>
      item.class === 'place' || item.class === 'boundary'
    )
    .map((item: Record<string, unknown>) => ({
      displayName: item.display_name as string,
      lat: parseFloat(item.lat as string),
      lon: parseFloat(item.lon as string),
      boundingBox: item.boundingbox as [string, string, string, string],
      osmId: item.osm_id as number,
      osmType: item.osm_type as string
    }));
}

export async function getCityByCoords(lat: number, lon: number): Promise<CityResult | null> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    format: 'json',
    zoom: '10'
  });

  const response = await fetch(`${NOMINATIM_API}/reverse?${params}`, {
    headers: {
      'User-Agent': 'PathPlanningVisualizer/1.0'
    }
  });

  if (!response.ok) return null;

  const data = await response.json();

  if (!data.osm_id) return null;

  return {
    displayName: data.display_name,
    lat: parseFloat(data.lat),
    lon: parseFloat(data.lon),
    boundingBox: data.boundingbox,
    osmId: data.osm_id,
    osmType: data.osm_type
  };
}
