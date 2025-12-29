import * as PIXI from 'pixi.js';
import { RoadSegment, GraphNode, BBox } from '../core/types';
import { projectToScreen } from '../core/graph';

export interface ColorTheme {
  visited: number;
  visitedBackward: number;
  path: number;
  startMarker: number;
  endMarker: number;
}

export const defaultTheme: ColorTheme = {
  visited: 0x00ffff,      // Cyan
  visitedBackward: 0xff0080, // Magenta
  path: 0x00ffff,         // Cyan
  startMarker: 0x00ff00,  // Green
  endMarker: 0xff0080,    // Magenta
};

// Fixed map size for consistent rendering (not scaled to screen)
const MAP_SIZE = 2000;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

export class MapRenderer {
  private mainContainer: PIXI.Container;
  private roadsContainer: PIXI.Container;
  private visitedContainer: PIXI.Container;
  private pathContainer: PIXI.Container;
  private markersContainer: PIXI.Container;

  private roadGraphics: PIXI.Graphics;
  private visitedGraphics: PIXI.Graphics;
  private pathGraphics: PIXI.Graphics;

  private bounds: BBox | null = null;
  private screenWidth: number = 0;
  private screenHeight: number = 0;

  private startMarker: PIXI.Graphics | null = null;
  private endMarker: PIXI.Graphics | null = null;

  private theme: ColorTheme = { ...defaultTheme };
  private animationFrameId: number | null = null;

  // Zoom and pan state
  private _zoom: number = 1;
  private _panX: number = 0;
  private _panY: number = 0;
  private isDragging: boolean = false;
  private dragStartX: number = 0;
  private dragStartY: number = 0;
  private panStartX: number = 0;
  private panStartY: number = 0;

  constructor(app: PIXI.Application) {
    this.screenWidth = app.screen.width;
    this.screenHeight = app.screen.height;

    // Create main container for zoom/pan
    this.mainContainer = new PIXI.Container();

    // Create containers for layering
    this.roadsContainer = new PIXI.Container();
    this.visitedContainer = new PIXI.Container();
    this.pathContainer = new PIXI.Container();
    this.markersContainer = new PIXI.Container();

    // Create graphics objects
    this.roadGraphics = new PIXI.Graphics();
    this.visitedGraphics = new PIXI.Graphics();
    this.pathGraphics = new PIXI.Graphics();

    // Add to containers
    this.roadsContainer.addChild(this.roadGraphics);
    this.visitedContainer.addChild(this.visitedGraphics);
    this.pathContainer.addChild(this.pathGraphics);

    // Add containers to main container in order (bottom to top)
    this.mainContainer.addChild(this.roadsContainer);
    this.mainContainer.addChild(this.visitedContainer);
    this.mainContainer.addChild(this.pathContainer);
    this.mainContainer.addChild(this.markersContainer);

    // Add main container to stage
    app.stage.addChild(this.mainContainer);

    // Set up mouse/touch interaction for panning
    this.setupInteraction(app);

    // Center the view initially
    this.centerView();
  }

  private setupInteraction(app: PIXI.Application): void {
    const canvas = app.view as HTMLCanvasElement;

    // Mouse wheel zoom
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;

      // Zoom toward mouse position
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      this.zoomAt(mouseX, mouseY, delta);
    }, { passive: false });

    // Pan with middle mouse button or shift+drag
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
        e.preventDefault();
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        this.panStartX = this._panX;
        this.panStartY = this._panY;
        canvas.style.cursor = 'grabbing';
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;
        this._panX = this.panStartX + dx;
        this._panY = this.panStartY + dy;
        this.updateTransform();
      }
    });

    canvas.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        canvas.style.cursor = 'default';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      if (this.isDragging) {
        this.isDragging = false;
        canvas.style.cursor = 'default';
      }
    });

    // Prevent context menu on right-click
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private updateTransform(): void {
    this.mainContainer.scale.set(this._zoom);
    this.mainContainer.position.set(this._panX, this._panY);
  }

  private centerView(): void {
    this._panX = (this.screenWidth - MAP_SIZE * this._zoom) / 2;
    this._panY = (this.screenHeight - MAP_SIZE * this._zoom) / 2;
    this.updateTransform();
  }

  setBounds(bounds: BBox): void {
    this.bounds = bounds;
  }

  resize(width: number, height: number): void {
    this.screenWidth = width;
    this.screenHeight = height;
  }

  // Zoom methods
  get zoom(): number {
    return this._zoom;
  }

  zoomIn(): void {
    this.setZoom(this._zoom + ZOOM_STEP);
  }

  zoomOut(): void {
    this.setZoom(this._zoom - ZOOM_STEP);
  }

  setZoom(newZoom: number): void {
    const oldZoom = this._zoom;
    this._zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom));

    // Zoom toward center
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    // Adjust pan to keep center point fixed
    const scale = this._zoom / oldZoom;
    this._panX = centerX - (centerX - this._panX) * scale;
    this._panY = centerY - (centerY - this._panY) * scale;

    this.updateTransform();
  }

  zoomAt(screenX: number, screenY: number, delta: number): void {
    const oldZoom = this._zoom;
    this._zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, this._zoom + delta));

    // Adjust pan to keep the point under cursor fixed
    const scale = this._zoom / oldZoom;
    this._panX = screenX - (screenX - this._panX) * scale;
    this._panY = screenY - (screenY - this._panY) * scale;

    this.updateTransform();
  }

  resetView(): void {
    this._zoom = 1;
    this.centerView();
  }

  // Convert screen coordinates to map coordinates (for click handling)
  screenToMap(screenX: number, screenY: number): { x: number; y: number } {
    const x = (screenX - this._panX) / this._zoom;
    const y = (screenY - this._panY) / this._zoom;
    return { x, y };
  }

  // Get current pan position
  get panX(): number {
    return this._panX;
  }

  get panY(): number {
    return this._panY;
  }

  // Check if currently dragging (to prevent click handling during drag)
  get dragging(): boolean {
    return this.isDragging;
  }

  drawRoads(segments: RoadSegment[]): void {
    this.roadGraphics.clear();

    if (segments.length === 0) return;

    for (const segment of segments) {
      if (segment.points.length < 2) continue;

      const lineWidth = this.getRoadWidth(segment.highway);
      this.roadGraphics.lineStyle(lineWidth, 0xffffff, 0.6);

      this.roadGraphics.moveTo(segment.points[0].x, segment.points[0].y);
      for (let i = 1; i < segment.points.length; i++) {
        this.roadGraphics.lineTo(segment.points[i].x, segment.points[i].y);
      }
    }

    // Center view after drawing roads
    this.centerView();
  }

  private getRoadWidth(highway: string): number {
    switch (highway) {
      case 'motorway':
      case 'motorway_link':
        return 2.5;
      case 'trunk':
      case 'trunk_link':
        return 2;
      case 'primary':
      case 'primary_link':
        return 1.8;
      case 'secondary':
      case 'secondary_link':
        return 1.5;
      case 'tertiary':
      case 'tertiary_link':
        return 1.2;
      case 'residential':
      case 'living_street':
        return 0.8;
      default:
        return 0.6;
    }
  }

  drawVisitedNode(node: GraphNode, fromDirection?: 'forward' | 'backward'): void {
    if (!this.bounds) return;

    const pos = projectToScreen(node.lat, node.lon, this.bounds, MAP_SIZE, MAP_SIZE);
    const color = fromDirection === 'backward' ? this.theme.visitedBackward : this.theme.visited;

    this.visitedGraphics.beginFill(color, 0.4);
    this.visitedGraphics.drawCircle(pos.x, pos.y, 3);
    this.visitedGraphics.endFill();
  }

  setTheme(theme: Partial<ColorTheme>): void {
    this.theme = { ...this.theme, ...theme };
  }

  getTheme(): ColorTheme {
    return { ...this.theme };
  }

  drawPath(nodes: GraphNode[]): void {
    if (!this.bounds || nodes.length < 2) return;

    this.pathGraphics.clear();

    const positions = nodes.map(n =>
      projectToScreen(n.lat, n.lon, this.bounds!, MAP_SIZE, MAP_SIZE)
    );

    const pathColor = this.theme.path;

    // Draw glowing path - multiple layers for glow effect

    // Outer glow (wider, more transparent)
    this.pathGraphics.lineStyle(12, pathColor, 0.2);
    this.pathGraphics.moveTo(positions[0].x, positions[0].y);
    for (let i = 1; i < positions.length; i++) {
      this.pathGraphics.lineTo(positions[i].x, positions[i].y);
    }

    // Middle glow
    this.pathGraphics.lineStyle(6, pathColor, 0.4);
    this.pathGraphics.moveTo(positions[0].x, positions[0].y);
    for (let i = 1; i < positions.length; i++) {
      this.pathGraphics.lineTo(positions[i].x, positions[i].y);
    }

    // Inner glow
    this.pathGraphics.lineStyle(3, pathColor, 0.7);
    this.pathGraphics.moveTo(positions[0].x, positions[0].y);
    for (let i = 1; i < positions.length; i++) {
      this.pathGraphics.lineTo(positions[i].x, positions[i].y);
    }

    // Core bright line
    this.pathGraphics.lineStyle(1.5, 0xffffff, 1);
    this.pathGraphics.moveTo(positions[0].x, positions[0].y);
    for (let i = 1; i < positions.length; i++) {
      this.pathGraphics.lineTo(positions[i].x, positions[i].y);
    }
  }

  // Animate dimming of roads and visited nodes when path is found
  animatePathFound(duration: number = 500): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    const startTime = performance.now();
    const startRoadAlpha = this.roadsContainer.alpha;
    const startVisitedAlpha = this.visitedContainer.alpha;
    const targetRoadAlpha = 0.2;
    const targetVisitedAlpha = 0.15;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      this.roadsContainer.alpha = startRoadAlpha + (targetRoadAlpha - startRoadAlpha) * eased;
      this.visitedContainer.alpha = startVisitedAlpha + (targetVisitedAlpha - startVisitedAlpha) * eased;

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.animationFrameId = null;
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  // Reset alpha values
  resetAlpha(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.roadsContainer.alpha = 1;
    this.visitedContainer.alpha = 1;
  }

  setStartMarker(node: GraphNode | null): void {
    if (this.startMarker) {
      this.markersContainer.removeChild(this.startMarker);
      this.startMarker.destroy();
      this.startMarker = null;
    }

    if (node && this.bounds) {
      const pos = projectToScreen(node.lat, node.lon, this.bounds, MAP_SIZE, MAP_SIZE);
      const color = this.theme.startMarker;
      this.startMarker = new PIXI.Graphics();

      // Outer glow
      this.startMarker.beginFill(color, 0.2);
      this.startMarker.drawCircle(pos.x, pos.y, 16);
      this.startMarker.endFill();

      // Middle glow
      this.startMarker.beginFill(color, 0.4);
      this.startMarker.drawCircle(pos.x, pos.y, 10);
      this.startMarker.endFill();

      // Inner circle
      this.startMarker.beginFill(color, 0.8);
      this.startMarker.drawCircle(pos.x, pos.y, 6);
      this.startMarker.endFill();

      // Center
      this.startMarker.beginFill(0xffffff, 1);
      this.startMarker.drawCircle(pos.x, pos.y, 3);
      this.startMarker.endFill();

      this.markersContainer.addChild(this.startMarker);
    }
  }

  setEndMarker(node: GraphNode | null): void {
    if (this.endMarker) {
      this.markersContainer.removeChild(this.endMarker);
      this.endMarker.destroy();
      this.endMarker = null;
    }

    if (node && this.bounds) {
      const pos = projectToScreen(node.lat, node.lon, this.bounds, MAP_SIZE, MAP_SIZE);
      const color = this.theme.endMarker;
      this.endMarker = new PIXI.Graphics();

      // Outer glow
      this.endMarker.beginFill(color, 0.2);
      this.endMarker.drawCircle(pos.x, pos.y, 16);
      this.endMarker.endFill();

      // Middle glow
      this.endMarker.beginFill(color, 0.4);
      this.endMarker.drawCircle(pos.x, pos.y, 10);
      this.endMarker.endFill();

      // Inner circle
      this.endMarker.beginFill(color, 0.8);
      this.endMarker.drawCircle(pos.x, pos.y, 6);
      this.endMarker.endFill();

      // Center
      this.endMarker.beginFill(0xffffff, 1);
      this.endMarker.drawCircle(pos.x, pos.y, 3);
      this.endMarker.endFill();

      this.markersContainer.addChild(this.endMarker);
    }
  }

  clearVisited(): void {
    this.visitedGraphics.clear();
  }

  clearPath(): void {
    this.pathGraphics.clear();
  }

  clearAll(): void {
    this.clearVisited();
    this.clearPath();
    this.setStartMarker(null);
    this.setEndMarker(null);
    this.resetAlpha();
    this.resetView();
  }

  destroy(): void {
    this.roadGraphics.destroy();
    this.visitedGraphics.destroy();
    this.pathGraphics.destroy();
    if (this.startMarker) this.startMarker.destroy();
    if (this.endMarker) this.endMarker.destroy();
    this.roadsContainer.destroy();
    this.visitedContainer.destroy();
    this.pathContainer.destroy();
    this.markersContainer.destroy();
    this.mainContainer.destroy();
  }
}

// Export MAP_SIZE for use in other modules
export const MAP_RENDER_SIZE = MAP_SIZE;
