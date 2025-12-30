
interface ControlPanelProps {
  canStart: boolean;
  isRunning: boolean;
  speed: number;
  instantMode: boolean;
  executionTime: number | null;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onInstantModeChange: (instant: boolean) => void;
}

export function ControlPanel({
  canStart,
  isRunning,
  speed,
  instantMode,
  executionTime,
  onStart,
  onStop,
  onReset,
  onSpeedChange,
  onInstantModeChange
}: ControlPanelProps) {
  return (
    <>
      <div className="control-group">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={instantMode}
            onChange={(e) => onInstantModeChange(e.target.checked)}
            disabled={isRunning}
          />
          <span className="toggle-text">Instant Mode</span>
          {instantMode && <span className="instant-badge">FAST</span>}
        </label>
        {instantMode && (
          <span className="instant-hint">No visualization, maximum speed</span>
        )}
      </div>

      {!instantMode && (
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
      )}

      {executionTime !== null && (
        <div className="execution-time">
          Completed in <span className="highlight">{executionTime.toFixed(2)}ms</span>
        </div>
      )}

      <div className="button-row">
        {!isRunning ? (
          <button
            className="btn btn-primary"
            onClick={onStart}
            disabled={!canStart}
          >
            {instantMode ? 'Run Instant' : 'Start'}
          </button>
        ) : (
          <button
            className="btn"
            onClick={onStop}
            disabled={instantMode}
          >
            {instantMode ? 'Running...' : 'Pause'}
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
