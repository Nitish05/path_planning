use std::collections::{HashMap, HashSet};
use wasm_bindgen::prelude::*;

use crate::graph::{WasmGraph, WasmGraphHandle};
use crate::heuristic::equirectangular_distance;
use crate::priority_queue::MinHeap;
use crate::types::{WasmGraphNode, WasmPathfindingStep};

/// A* pathfinding algorithm solver
#[wasm_bindgen]
pub struct AStarSolver {
    // Graph reference (kept alive by JS holding WasmGraphHandle)
    graph_ptr: *const WasmGraph,

    // Node indices
    start_idx: usize,
    end_idx: usize,

    // Algorithm state
    open_set: MinHeap<usize>,
    came_from: HashMap<usize, usize>,
    g_score: HashMap<usize, f64>,
    closed_set: HashSet<usize>,
    h_cache: HashMap<usize, f64>,

    // Output state
    visited_count: u32,
    done: bool,
    started: bool,
}

#[wasm_bindgen]
impl AStarSolver {
    /// Create a new A* solver
    #[wasm_bindgen(constructor)]
    pub fn new(
        graph_handle: &WasmGraphHandle,
        start_id: &str,
        end_id: &str,
    ) -> Result<AStarSolver, JsValue> {
        let graph = &graph_handle.graph;

        let start_idx = graph
            .get_index(start_id)
            .ok_or_else(|| JsValue::from_str("Start node not found"))?;

        let end_idx = graph
            .get_index(end_id)
            .ok_or_else(|| JsValue::from_str("End node not found"))?;

        let capacity = graph.node_count() / 4; // Estimate

        let mut solver = AStarSolver {
            graph_ptr: graph as *const WasmGraph,
            start_idx,
            end_idx,
            open_set: MinHeap::with_capacity(capacity),
            came_from: HashMap::with_capacity(capacity),
            g_score: HashMap::with_capacity(capacity),
            closed_set: HashSet::with_capacity(capacity),
            h_cache: HashMap::with_capacity(capacity),
            visited_count: 0,
            done: false,
            started: false,
        };

        // Initialize start node
        solver.g_score.insert(start_idx, 0.0);
        let h = solver.compute_heuristic(start_idx);
        solver.open_set.push(start_idx, h);

        Ok(solver)
    }

    /// Compute heuristic with caching
    fn compute_heuristic(&mut self, node_idx: usize) -> f64 {
        if let Some(&h) = self.h_cache.get(&node_idx) {
            return h;
        }

        let graph = unsafe { &*self.graph_ptr };
        let node = graph.get_node(node_idx);
        let goal = graph.get_node(self.end_idx);

        let h = equirectangular_distance(node.lat, node.lon, goal.lat, goal.lon);
        self.h_cache.insert(node_idx, h);
        h
    }

    /// Reconstruct the path from start to end
    fn reconstruct_path(&self) -> Vec<WasmGraphNode> {
        let graph = unsafe { &*self.graph_ptr };
        let mut path = Vec::new();
        let mut current = self.end_idx;

        loop {
            path.push(graph.node_to_output(current));

            if let Some(&prev) = self.came_from.get(&current) {
                current = prev;
            } else {
                break;
            }
        }

        path.reverse();
        path
    }

    /// Get the next step in the algorithm
    #[wasm_bindgen(js_name = nextStep)]
    pub fn next_step(&mut self) -> JsValue {
        let graph = unsafe { &*self.graph_ptr };

        // First call: emit start step
        if !self.started {
            self.started = true;
            let step = WasmPathfindingStep::Start {
                node_id: graph.get_node(self.start_idx).id.clone(),
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // Already done
        if self.done {
            let step = WasmPathfindingStep::Complete {
                path: vec![],
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // No more nodes to explore
        if self.open_set.is_empty() {
            self.done = true;
            let step = WasmPathfindingStep::Complete {
                path: vec![],
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // Get next node from priority queue
        let current_idx = self.open_set.pop().unwrap();

        // Skip if already processed
        if self.closed_set.contains(&current_idx) {
            return self.next_step();
        }

        self.closed_set.insert(current_idx);
        self.visited_count += 1;

        // Check if we reached the goal
        if current_idx == self.end_idx {
            self.done = true;
            let path = self.reconstruct_path();
            let step = WasmPathfindingStep::Complete {
                path,
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // Expand neighbors
        let current_g = self.g_score[&current_idx];

        for edge in graph.neighbors(current_idx) {
            if self.closed_set.contains(&edge.to) {
                continue;
            }

            let tentative_g = current_g + edge.weight;
            let neighbor_g = self.g_score.get(&edge.to).copied().unwrap_or(f64::INFINITY);

            if tentative_g < neighbor_g {
                self.came_from.insert(edge.to, current_idx);
                self.g_score.insert(edge.to, tentative_g);
                let h = self.compute_heuristic(edge.to);
                let f = tentative_g + h;
                self.open_set.push(edge.to, f);
            }
        }

        // Return visit step
        let step = WasmPathfindingStep::Visit {
            node_id: graph.get_node(current_idx).id.clone(),
            visited_count: self.visited_count,
            from_direction: None,
        };
        serde_wasm_bindgen::to_value(&step).unwrap()
    }

    /// Check if the algorithm is done
    #[wasm_bindgen(js_name = isDone)]
    pub fn is_done(&self) -> bool {
        self.done
    }
}
