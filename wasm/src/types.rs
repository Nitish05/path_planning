use serde::{Deserialize, Serialize};

/// Node representation for serialization to JS
#[derive(Clone, Serialize, Deserialize)]
pub struct WasmGraphNode {
    pub id: String,
    pub lat: f64,
    pub lon: f64,
}

/// Pathfinding step types matching TypeScript PathfindingStep
#[derive(Serialize)]
#[serde(tag = "type")]
pub enum WasmPathfindingStep {
    #[serde(rename = "start")]
    Start {
        #[serde(rename = "nodeId")]
        node_id: String
    },

    #[serde(rename = "visit")]
    Visit {
        #[serde(rename = "nodeId")]
        node_id: String,
        #[serde(rename = "visitedCount")]
        visited_count: u32,
        #[serde(rename = "fromDirection", skip_serializing_if = "Option::is_none")]
        from_direction: Option<String>,
    },

    #[serde(rename = "complete")]
    Complete {
        path: Vec<WasmGraphNode>,
        #[serde(rename = "visitedCount")]
        visited_count: u32,
    },
}

/// Input data structures from JavaScript
#[derive(Deserialize)]
pub struct SerializedNode {
    pub id: String,
    pub lat: f64,
    pub lon: f64,
}

#[derive(Deserialize)]
pub struct SerializedEdge {
    pub to: String,
    pub weight: f64,
}

#[derive(Deserialize)]
pub struct AdjacencyEntry {
    pub from: String,
    pub edges: Vec<SerializedEdge>,
}

#[derive(Deserialize)]
pub struct SerializedGraph {
    pub nodes: Vec<SerializedNode>,
    pub adjacency: Vec<AdjacencyEntry>,
}
