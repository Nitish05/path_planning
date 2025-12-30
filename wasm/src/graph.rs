use std::collections::HashMap;
use wasm_bindgen::prelude::*;

use crate::types::{SerializedGraph, WasmGraphNode};

/// Internal node representation
#[derive(Clone)]
pub struct WasmNode {
    pub id: String,
    pub lat: f64,
    pub lon: f64,
}

/// Internal edge representation
#[derive(Clone)]
pub struct WasmEdge {
    pub to: usize,      // Index into nodes array
    pub weight: f64,    // Distance in meters
}

/// Graph data structure optimized for WASM pathfinding
pub struct WasmGraph {
    pub nodes: Vec<WasmNode>,
    pub adjacency: Vec<Vec<WasmEdge>>,  // Indexed by node index
    node_to_index: HashMap<String, usize>,
}

impl WasmGraph {
    /// Build the graph from serialized JavaScript data
    pub fn from_serialized(data: SerializedGraph) -> Self {
        let mut nodes = Vec::with_capacity(data.nodes.len());
        let mut node_to_index = HashMap::with_capacity(data.nodes.len());

        // Build nodes array and index lookup
        for (idx, node) in data.nodes.into_iter().enumerate() {
            node_to_index.insert(node.id.clone(), idx);
            nodes.push(WasmNode {
                id: node.id,
                lat: node.lat,
                lon: node.lon,
            });
        }

        // Build adjacency list
        let mut adjacency: Vec<Vec<WasmEdge>> = vec![Vec::new(); nodes.len()];

        for entry in data.adjacency {
            if let Some(&from_idx) = node_to_index.get(&entry.from) {
                for edge in entry.edges {
                    if let Some(&to_idx) = node_to_index.get(&edge.to) {
                        adjacency[from_idx].push(WasmEdge {
                            to: to_idx,
                            weight: edge.weight,
                        });
                    }
                }
            }
        }

        WasmGraph {
            nodes,
            adjacency,
            node_to_index,
        }
    }

    /// Get index for a node ID
    #[inline]
    pub fn get_index(&self, id: &str) -> Option<usize> {
        self.node_to_index.get(id).copied()
    }

    /// Get node by index
    #[inline]
    pub fn get_node(&self, idx: usize) -> &WasmNode {
        &self.nodes[idx]
    }

    /// Get neighbors (edges) for a node index
    #[inline]
    pub fn neighbors(&self, idx: usize) -> &[WasmEdge] {
        &self.adjacency[idx]
    }

    /// Get number of nodes
    #[inline]
    pub fn node_count(&self) -> usize {
        self.nodes.len()
    }

    /// Convert a node to the output format
    pub fn node_to_output(&self, idx: usize) -> WasmGraphNode {
        let node = &self.nodes[idx];
        WasmGraphNode {
            id: node.id.clone(),
            lat: node.lat,
            lon: node.lon,
        }
    }
}

/// Handle for the graph, exposed to JavaScript
#[wasm_bindgen]
pub struct WasmGraphHandle {
    // pub(crate) so algorithms can access it directly
    pub(crate) graph: WasmGraph,
}

#[wasm_bindgen]
impl WasmGraphHandle {
    /// Create a new graph from serialized JavaScript data
    #[wasm_bindgen(constructor)]
    pub fn new(serialized: JsValue) -> Result<WasmGraphHandle, JsValue> {
        // Set panic hook for better error messages
        #[cfg(feature = "console_error_panic_hook")]
        console_error_panic_hook::set_once();

        let data: SerializedGraph = serde_wasm_bindgen::from_value(serialized)
            .map_err(|e| JsValue::from_str(&format!("Failed to parse graph: {}", e)))?;

        Ok(WasmGraphHandle {
            graph: WasmGraph::from_serialized(data),
        })
    }

    /// Get the number of nodes in the graph
    #[wasm_bindgen(js_name = nodeCount)]
    pub fn node_count(&self) -> usize {
        self.graph.node_count()
    }
}
