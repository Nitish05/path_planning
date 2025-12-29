// Coordinate types
export interface LatLon {
  lat: number;
  lon: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface BBox {
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
}

// OSM data types
export interface OSMNode {
  id: number;
  lat: number;
  lon: number;
}

export interface OSMWay {
  id: number;
  nodes: number[];
  geometry: LatLon[];
  tags: Record<string, string>;
}

export interface OSMData {
  nodes: Map<number, OSMNode>;
  ways: OSMWay[];
  bounds: BBox;
}

// Graph types
export interface GraphNode {
  id: string;
  lat: number;
  lon: number;
  x?: number;
  y?: number;
}

export interface GraphEdge {
  from: string;
  to: string;
  weight: number;
  wayId: number;
}

export interface Graph {
  nodes: Map<string, GraphNode>;
  edges: GraphEdge[];
  adjacency: Map<string, GraphEdge[]>;
}

// Road segment for rendering
export interface RoadSegment {
  points: Point[];
  wayId: number;
  highway: string;
}

// Pathfinding types
export type PathfindingStepType = 'visit' | 'path' | 'complete' | 'start';

export interface PathfindingStep {
  type: PathfindingStepType;
  nodeId?: string;
  node?: GraphNode;
  path?: GraphNode[];
  visitedCount?: number;
  fromDirection?: 'forward' | 'backward';
}

export type AlgorithmType =
  | 'astar'
  | 'dijkstra'
  | 'bfs'
  | 'dfs'
  | 'greedy'
  | 'bidirectional';

export interface AlgorithmInfo {
  id: AlgorithmType;
  name: string;
  description: string;
  optimal: boolean;
  usesHeuristic: boolean;
}

export const ALGORITHMS: AlgorithmInfo[] = [
  {
    id: 'astar',
    name: 'A* Search',
    description: 'Optimal pathfinding with heuristic guidance',
    optimal: true,
    usesHeuristic: true
  },
  {
    id: 'dijkstra',
    name: "Dijkstra's Algorithm",
    description: 'Optimal shortest path, explores uniformly',
    optimal: true,
    usesHeuristic: false
  },
  {
    id: 'bfs',
    name: 'Breadth-First Search',
    description: 'Finds shortest path by hop count',
    optimal: true,
    usesHeuristic: false
  },
  {
    id: 'dfs',
    name: 'Depth-First Search',
    description: 'Explores deeply first, not optimal',
    optimal: false,
    usesHeuristic: false
  },
  {
    id: 'greedy',
    name: 'Greedy Best-First',
    description: 'Fast but not optimal, follows heuristic',
    optimal: false,
    usesHeuristic: true
  },
  {
    id: 'bidirectional',
    name: 'Bidirectional A*',
    description: 'Searches from both ends simultaneously',
    optimal: true,
    usesHeuristic: true
  }
];

// City search types
export interface CityResult {
  displayName: string;
  lat: number;
  lon: number;
  boundingBox: [string, string, string, string];
  osmId: number;
  osmType: string;
}

// App state
export interface AppState {
  city: CityResult | null;
  osmData: OSMData | null;
  graph: Graph | null;
  roadSegments: RoadSegment[];
  startNode: GraphNode | null;
  endNode: GraphNode | null;
  algorithm: AlgorithmType;
  isLoading: boolean;
  isRunning: boolean;
  speed: number;
  visitedNodes: Set<string>;
  currentPath: GraphNode[];
  error: string | null;
}
