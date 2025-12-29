import { AlgorithmType, ALGORITHMS } from '../core/types';

interface AlgorithmSelectorProps {
  value: AlgorithmType;
  onChange: (algorithm: AlgorithmType) => void;
  disabled?: boolean;
}

export function AlgorithmSelector({ value, onChange, disabled }: AlgorithmSelectorProps) {
  return (
    <div className="control-group">
      <label>Algorithm</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as AlgorithmType)}
        disabled={disabled}
      >
        {ALGORITHMS.map(algo => (
          <option key={algo.id} value={algo.id}>
            {algo.name}
          </option>
        ))}
      </select>
      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
        {ALGORITHMS.find(a => a.id === value)?.description}
      </div>
    </div>
  );
}
