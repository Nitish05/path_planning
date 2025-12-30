/// Earth radius in meters
const EARTH_RADIUS: f64 = 6_371_000.0;

/// Degrees to radians conversion factor
const DEG_TO_RAD: f64 = std::f64::consts::PI / 180.0;

/// Equirectangular approximation for distance between two points.
/// This is faster than Haversine (one trig call vs 6+) and is admissible
/// for A* (never overestimates the actual distance).
///
/// Matches the JavaScript implementation in graph.ts
#[inline]
pub fn equirectangular_distance(lat1: f64, lon1: f64, lat2: f64, lon2: f64) -> f64 {
    let avg_lat = (lat1 + lat2) / 2.0 * DEG_TO_RAD;
    let cos_lat = avg_lat.cos();

    let dx = (lon2 - lon1) * DEG_TO_RAD * cos_lat;
    let dy = (lat2 - lat1) * DEG_TO_RAD;

    EARTH_RADIUS * (dx * dx + dy * dy).sqrt()
}

/// Haversine distance for accurate edge weights.
/// Returns distance in meters.
#[allow(dead_code)]
pub fn haversine_distance(lat1: f64, lon1: f64, lat2: f64, lon2: f64) -> f64 {
    let lat1_rad = lat1 * DEG_TO_RAD;
    let lat2_rad = lat2 * DEG_TO_RAD;
    let delta_lat = (lat2 - lat1) * DEG_TO_RAD;
    let delta_lon = (lon2 - lon1) * DEG_TO_RAD;

    let a = (delta_lat / 2.0).sin().powi(2)
          + lat1_rad.cos() * lat2_rad.cos() * (delta_lon / 2.0).sin().powi(2);
    let c = 2.0 * a.sqrt().asin();

    EARTH_RADIUS * c
}
