
interface ControlPanelProps {
  canStart: boolean;
  isRunning: boolean;
  speed: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
}

export function ControlPanel({
  canStart,
  isRunning,
  speed,
  onStart,
  onStop,
  onReset,
  onSpeedChange
}: ControlPanelProps) {
  return (
    <>
      <div className="control-group">
        <label>Speed</label>
        <div className="speed-control">
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => onSpeedChange(parseInt(e.target.value))}
          />
          <span>{speed}x</span>
        </div>
      </div>

      <div className="button-row">
        {!isRunning ? (
          <button
            className="btn btn-primary"
            onClick={onStart}
            disabled={!canStart}
          >
            Start
          </button>
        ) : (
          <button
            className="btn"
            onClick={onStop}
          >
            Pause
          </button>
        )}
        <button
          className="btn btn-danger"
          onClick={onReset}
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
    </>
  );
}
