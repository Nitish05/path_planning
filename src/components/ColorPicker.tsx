import { useState } from 'react';
import type { ColorTheme } from '../renderer/MapRenderer';

interface ColorPickerProps {
  theme: ColorTheme;
  onChange: (theme: Partial<ColorTheme>) => void;
  disabled?: boolean;
}

// Predefined color presets
const colorPresets = [
  { name: 'Cyan', value: 0x00ffff },
  { name: 'Magenta', value: 0xff0080 },
  { name: 'Green', value: 0x00ff00 },
  { name: 'Orange', value: 0xff8000 },
  { name: 'Purple', value: 0x8000ff },
  { name: 'Yellow', value: 0xffff00 },
  { name: 'Red', value: 0xff0000 },
  { name: 'Blue', value: 0x0080ff },
];

// Theme presets
const themePresets: { name: string; theme: Partial<ColorTheme> }[] = [
  {
    name: 'Tron (Default)',
    theme: {
      visited: 0x00ffff,
      visitedBackward: 0xff0080,
      path: 0x00ffff,
      startMarker: 0x00ff00,
      endMarker: 0xff0080,
    },
  },
  {
    name: 'Sunset',
    theme: {
      visited: 0xff8000,
      visitedBackward: 0xff0080,
      path: 0xff8000,
      startMarker: 0xffff00,
      endMarker: 0xff0000,
    },
  },
  {
    name: 'Ocean',
    theme: {
      visited: 0x0080ff,
      visitedBackward: 0x00ffff,
      path: 0x0080ff,
      startMarker: 0x00ff80,
      endMarker: 0x00ffff,
    },
  },
  {
    name: 'Neon Purple',
    theme: {
      visited: 0x8000ff,
      visitedBackward: 0xff00ff,
      path: 0x8000ff,
      startMarker: 0x00ff00,
      endMarker: 0xff00ff,
    },
  },
  {
    name: 'Matrix',
    theme: {
      visited: 0x00ff00,
      visitedBackward: 0x00ff80,
      path: 0x00ff00,
      startMarker: 0x00ffff,
      endMarker: 0x00ff80,
    },
  },
];

function hexToColor(hex: number): string {
  return '#' + hex.toString(16).padStart(6, '0');
}

function colorToHex(color: string): number {
  return parseInt(color.replace('#', ''), 16);
}

export function ColorPicker({ theme, onChange, disabled }: ColorPickerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="color-picker">
      <button
        className="color-picker-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        disabled={disabled}
      >
        Colors {isExpanded ? '▲' : '▼'}
      </button>

      {isExpanded && (
        <div className="color-picker-panel">
          <div className="color-presets">
            <label>Theme Presets</label>
            <div className="preset-buttons">
              {themePresets.map((preset) => (
                <button
                  key={preset.name}
                  className="preset-button"
                  onClick={() => onChange(preset.theme)}
                  disabled={disabled}
                  title={preset.name}
                >
                  <span
                    className="preset-swatch"
                    style={{ backgroundColor: hexToColor(preset.theme.path!) }}
                  />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          <div className="color-options">
            <div className="color-option">
              <label>Path Color</label>
              <div className="color-swatches">
                {colorPresets.map((preset) => (
                  <button
                    key={preset.value}
                    className={`color-swatch ${theme.path === preset.value ? 'active' : ''}`}
                    style={{ backgroundColor: hexToColor(preset.value) }}
                    onClick={() => onChange({ path: preset.value, visited: preset.value })}
                    disabled={disabled}
                    title={preset.name}
                  />
                ))}
                <input
                  type="color"
                  value={hexToColor(theme.path)}
                  onChange={(e) => {
                    const color = colorToHex(e.target.value);
                    onChange({ path: color, visited: color });
                  }}
                  disabled={disabled}
                  className="color-input"
                  title="Custom color"
                />
              </div>
            </div>

            <div className="color-option">
              <label>Visited Nodes</label>
              <div className="color-swatches">
                {colorPresets.map((preset) => (
                  <button
                    key={preset.value}
                    className={`color-swatch ${theme.visited === preset.value ? 'active' : ''}`}
                    style={{ backgroundColor: hexToColor(preset.value) }}
                    onClick={() => onChange({ visited: preset.value })}
                    disabled={disabled}
                    title={preset.name}
                  />
                ))}
                <input
                  type="color"
                  value={hexToColor(theme.visited)}
                  onChange={(e) => onChange({ visited: colorToHex(e.target.value) })}
                  disabled={disabled}
                  className="color-input"
                  title="Custom color"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
