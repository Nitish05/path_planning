
interface LegendProps {
  visitedCount: number;
  pathLength: number;
}

export function Legend({ visitedCount, pathLength }: LegendProps) {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="legend-color roads" />
        <span>Roads</span>
      </div>
      <div className="legend-item">
        <div className="legend-color start" />
        <span>Start Point</span>
      </div>
      <div className="legend-item">
        <div className="legend-color end" />
        <span>End Point</span>
      </div>
      <div className="legend-item">
        <div className="legend-color visited" />
        <span>Visited ({visitedCount})</span>
      </div>
      <div className="legend-item">
        <div className="legend-color path" />
        <span>Path ({pathLength} nodes)</span>
      </div>
    </div>
  );
}
