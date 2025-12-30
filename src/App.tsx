import { useState, useCallback, useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { CityResult, AlgorithmType, PathfindingStep } from './core/types';
import { MapRenderer, defaultTheme, ColorTheme } from './renderer/MapRenderer';
import { useGraph } from './hooks/useGraph';
import { usePathfinding } from './hooks/usePathfinding';
import { useMapInteraction } from './hooks/useMapInteraction';
import { CitySearch } from './components/CitySearch';
import { AlgorithmSelector } from './components/AlgorithmSelector';
import { ControlPanel } from './components/ControlPanel';
import { Legend } from './components/Legend';
import { ColorPicker } from './components/ColorPicker';
import { initWasm } from './core/pathfinding/wasm-loader';
import { clearWasmGraph } from './core/pathfinding';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const rendererRef = useRef<MapRenderer | null>(null);

  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [selectedCity, setSelectedCity] = useState<CityResult | null>(null);
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('astar');
  const [isInitialized, setIsInitialized] = useState(false);
  const [colorTheme, setColorTheme] = useState<ColorTheme>({ ...defaultTheme });

  const {
    graph,
    roadSegments,
    bounds,
    isLoading,
    error,
    loadCity
  } = useGraph();

  const {
    isRunning,
    currentPath,
    visitedCount,
    start: startPathfinding,
    stop: stopPathfinding,
    reset: resetPathfinding,
    speed,
    setSpeed,
    onStep
  } = usePathfinding();

  const {
    startNode,
    endNode,
    handleClick,
    reset: resetPoints
  } = useMapInteraction(graph, bounds);

  // Initialize WASM module
  useEffect(() => {
    initWasm().catch(err => {
      console.warn('Failed to initialize WASM, will use JS fallback:', err);
    });
  }, []);

  // Initialize PixiJS
  useEffect(() => {
    if (!containerRef.current) return;

    // Check if already initialized (for StrictMode double-mount)
    if (appRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // If container has no size yet, use window dimensions
    if (width < 100 || height < 100) {
      width = window.innerWidth;
      height = window.innerHeight - 100;
    }

    // PixiJS v7 - synchronous initialization
    const app = new PIXI.Application({
      width,
      height,
      backgroundColor: 0x000000,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true
    });

    container.appendChild(app.view as HTMLCanvasElement);
    appRef.current = app;

    const renderer = new MapRenderer(app);
    rendererRef.current = renderer;

    setDimensions({ width, height });
    setIsInitialized(true);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !appRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      setDimensions({ width, height });
      appRef.current.renderer.resize(width, height);
      if (rendererRef.current) {
        rendererRef.current.resize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle canvas clicks
  useEffect(() => {
    if (!appRef.current || !rendererRef.current) return;

    const canvas = appRef.current.view as HTMLCanvasElement;
    const renderer = rendererRef.current;

    const handleCanvasClick = (event: MouseEvent) => {
      if (isLoading || isRunning) return;

      // Don't register clicks if we were just dragging
      if (renderer.dragging) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = dimensions.width / rect.width;
      const scaleY = dimensions.height / rect.height;
      const screenX = (event.clientX - rect.left) * scaleX;
      const screenY = (event.clientY - rect.top) * scaleY;

      // Convert screen coordinates to map coordinates (accounting for zoom/pan)
      const mapCoords = renderer.screenToMap(screenX, screenY);
      handleClick(mapCoords.x, mapCoords.y);
    };

    canvas.addEventListener('click', handleCanvasClick);
    return () => canvas.removeEventListener('click', handleCanvasClick);
  }, [handleClick, dimensions, isLoading, isRunning]);

  // Handle step callback for real-time visualization
  useEffect(() => {
    onStep((step: PathfindingStep) => {
      if (!rendererRef.current || !bounds) return;

      if (step.type === 'visit' && step.node) {
        rendererRef.current.drawVisitedNode(step.node, step.fromDirection);
      }
    });
  }, [onStep, bounds]);

  // Draw roads when loaded
  useEffect(() => {
    if (!rendererRef.current || roadSegments.length === 0 || !isInitialized) return;

    // Small delay to ensure PixiJS rendering is fully initialized
    const timeoutId = setTimeout(() => {
      if (rendererRef.current) {
        rendererRef.current.drawRoads(roadSegments);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [roadSegments, isInitialized]);

  // Update bounds
  useEffect(() => {
    if (!rendererRef.current || !bounds || !isInitialized) return;
    rendererRef.current.setBounds(bounds);
  }, [bounds, isInitialized]);

  // Update markers
  useEffect(() => {
    if (!rendererRef.current || !isInitialized) return;
    rendererRef.current.setStartMarker(startNode);
  }, [startNode, isInitialized]);

  useEffect(() => {
    if (!rendererRef.current || !isInitialized) return;
    rendererRef.current.setEndMarker(endNode);
  }, [endNode, isInitialized]);

  // Update path visualization and trigger dimming animation when path is found
  useEffect(() => {
    if (!rendererRef.current || !isInitialized) return;
    if (currentPath.length > 0) {
      rendererRef.current.drawPath(currentPath);
      // Trigger dimming animation when path is found
      rendererRef.current.animatePathFound(600);
    }
  }, [currentPath, isInitialized]);

  // Handle color theme changes
  const handleThemeChange = useCallback((newTheme: Partial<ColorTheme>) => {
    setColorTheme(prev => ({ ...prev, ...newTheme }));
    if (rendererRef.current) {
      rendererRef.current.setTheme(newTheme);
    }
  }, []);

  // Handle city selection
  const handleCitySelect = useCallback(async (city: CityResult) => {
    setSelectedCity(city);
    resetPathfinding();
    resetPoints();
    clearWasmGraph(); // Clear cached WASM graph when city changes

    if (rendererRef.current) {
      rendererRef.current.clearAll();
    }

    await loadCity(city);
  }, [loadCity, resetPathfinding, resetPoints]);

  // Handle start pathfinding
  const handleStart = useCallback(() => {
    if (!graph || !startNode || !endNode) return;

    if (rendererRef.current) {
      rendererRef.current.resetAlpha();
      rendererRef.current.clearVisited();
      rendererRef.current.clearPath();
    }

    startPathfinding(graph, startNode, endNode, algorithm);
  }, [graph, startNode, endNode, algorithm, startPathfinding]);

  // Handle reset
  const handleReset = useCallback(() => {
    resetPathfinding();
    resetPoints();

    if (rendererRef.current) {
      rendererRef.current.resetAlpha();
      rendererRef.current.clearVisited();
      rendererRef.current.clearPath();
    }
  }, [resetPathfinding, resetPoints]);

  // Zoom handlers
  const handleZoomIn = useCallback(() => {
    if (rendererRef.current) {
      rendererRef.current.zoomIn();
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (rendererRef.current) {
      rendererRef.current.zoomOut();
    }
  }, []);

  const handleResetView = useCallback(() => {
    if (rendererRef.current) {
      rendererRef.current.resetView();
    }
  }, []);

  const canStart = !!graph && !!startNode && !!endNode && !isRunning;

  return (
    <div className="app">
      {/* Control Panel */}
      <div className="control-panel">
        <h1>Path Planning Visualizer</h1>

        <CitySearch
          onSelect={handleCitySelect}
          disabled={isLoading}
        />

        {error && (
          <div className="error-message">{error}</div>
        )}

        <AlgorithmSelector
          value={algorithm}
          onChange={setAlgorithm}
          disabled={isRunning}
        />

        <ControlPanel
          canStart={canStart}
          isRunning={isRunning}
          speed={speed}
          onStart={handleStart}
          onStop={stopPathfinding}
          onReset={handleReset}
          onSpeedChange={setSpeed}
        />

        <ColorPicker
          theme={colorTheme}
          onChange={handleThemeChange}
          disabled={isRunning}
        />

        <div className="status">
          {!selectedCity && (
            <span>Search for a city to begin</span>
          )}
          {selectedCity && !graph && !isLoading && (
            <span>Loading city data...</span>
          )}
          {graph && !startNode && (
            <span>Click on the map to set <span className="highlight">start point</span></span>
          )}
          {graph && startNode && !endNode && (
            <span>Click on the map to set <span className="highlight">end point</span></span>
          )}
          {graph && startNode && endNode && !isRunning && currentPath.length === 0 && (
            <span>Click <span className="highlight">Start</span> to begin pathfinding</span>
          )}
          {isRunning && (
            <span>Searching... <span className="highlight">{visitedCount}</span> nodes visited</span>
          )}
          {!isRunning && currentPath.length > 0 && (
            <span>Path found! <span className="highlight">{currentPath.length}</span> nodes, <span className="highlight">{visitedCount}</span> visited</span>
          )}
        </div>
      </div>

      {/* Legend */}
      {graph && (
        <Legend
          visitedCount={visitedCount}
          pathLength={currentPath.length}
        />
      )}

      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="canvas-container"
        style={{ flex: 1 }}
      />

      {/* Zoom Controls */}
      {graph && (
        <div className="zoom-controls">
          <button onClick={handleZoomIn} title="Zoom In">+</button>
          <button onClick={handleZoomOut} title="Zoom Out">−</button>
          <button onClick={handleResetView} title="Reset View">⟲</button>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner" />
            <span className="loading-text">Loading road data...</span>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!graph && !isLoading && (
        <div className="instructions">
          <p>Search for a city to visualize path planning algorithms</p>
          <p style={{ color: 'rgba(0, 255, 255, 0.6)' }}>on real street networks</p>
        </div>
      )}
    </div>
  );
}

export default App;
