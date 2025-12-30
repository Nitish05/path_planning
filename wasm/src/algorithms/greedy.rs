use std::collections::{HashMap, HashSet};
use wasm_bindgen::prelude::*;

use crate::graph::{WasmGraph, WasmGraphHandle};
use crate::heuristic::equirectangular_distance;
use crate::priority_queue::MinHeap;
use crate::types::{InstantResult, WasmGraphNode, WasmPathfindingStep};

/// Greedy Best-First Search pathfinding algorithm solver
/// Uses only heuristic (h-score), ignores actual distance traveled
#[wasm_bindgen]
pub struct GreedySolver {
    graph_ptr: *const WasmGraph,
    start_idx: usize,
    end_idx: usize,

    open_set: MinHeap<usize>,
    came_from: HashMap<usize, usize>,
    visited: HashSet<usize>,

    visited_count: u32,
    done: bool,
    started: bool,
}

#[wasm_bindgen]
impl GreedySolver {
    #[wasm_bindgen(constructor)]
    pub fn new(
        graph_handle: &WasmGraphHandle,
        start_id: &str,
        end_id: &str,
    ) -> Result<GreedySolver, JsValue> {
        let graph = &graph_handle.graph;

        let start_idx = graph
            .get_index(start_id)
            .ok_or_else(|| JsValue::from_str("Start node not found"))?;

        let end_idx = graph
            .get_index(end_id)
            .ok_or_else(|| JsValue::from_str("End node not found"))?;

        let capacity = graph.node_count() / 4;

        let mut solver = GreedySolver {
            graph_ptr: graph as *const WasmGraph,
            start_idx,
            end_idx,
            open_set: MinHeap::with_capacity(capacity),
            came_from: HashMap::with_capacity(capacity),
            visited: HashSet::with_capacity(capacity),
            visited_count: 0,
            done: false,
            started: false,
        };

        let h = solver.compute_heuristic(start_idx);
        solver.open_set.push(start_idx, h);

        Ok(solver)
    }

    fn compute_heuristic(&self, node_idx: usize) -> f64 {
        let graph = unsafe { &*self.graph_ptr };
        let node = graph.get_node(node_idx);
        let goal = graph.get_node(self.end_idx);
        equirectangular_distance(node.lat, node.lon, goal.lat, goal.lon)
    }

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

    #[wasm_bindgen(js_name = nextStep)]
    pub fn next_step(&mut self) -> JsValue {
        let graph = unsafe { &*self.graph_ptr };

        if !self.started {
            self.started = true;
            let step = WasmPathfindingStep::Start {
                node_id: graph.get_node(self.start_idx).id.clone(),
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        if self.done || self.open_set.is_empty() {
            self.done = true;
            let step = WasmPathfindingStep::Complete {
                path: vec![],
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        let current_idx = self.open_set.pop().unwrap();

        if self.visited.contains(&current_idx) {
            return self.next_step();
        }

        self.visited.insert(current_idx);
        self.visited_count += 1;

        if current_idx == self.end_idx {
            self.done = true;
            let path = self.reconstruct_path();
            let step = WasmPathfindingStep::Complete {
                path,
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        for edge in graph.neighbors(current_idx) {
            if !self.visited.contains(&edge.to) {
                self.came_from.entry(edge.to).or_insert(current_idx);
                let h = self.compute_heuristic(edge.to);
                self.open_set.push(edge.to, h);
            }
        }

        let step = WasmPathfindingStep::Visit {
            node_id: graph.get_node(current_idx).id.clone(),
            visited_count: self.visited_count,
            from_direction: None,
        };
        serde_wasm_bindgen::to_value(&step).unwrap()
    }

    #[wasm_bindgen(js_name = isDone)]
    pub fn is_done(&self) -> bool {
        self.done
    }

    #[wasm_bindgen(js_name = runToCompletion)]
    pub fn run_to_completion(&mut self) -> JsValue {
        let graph = unsafe { &*self.graph_ptr };
        let mut visited_nodes: Vec<WasmGraphNode> = Vec::new();

        while !self.open_set.is_empty() {
            let current_idx = self.open_set.pop().unwrap();

            if self.visited.contains(&current_idx) {
                continue;
            }

            self.visited.insert(current_idx);
            self.visited_count += 1;
            visited_nodes.push(graph.node_to_output(current_idx));

            if current_idx == self.end_idx {
                self.done = true;
                let path = self.reconstruct_path();
                let result = InstantResult {
                    path,
                    visited_count: self.visited_count,
                    visited_nodes,
                };
                return serde_wasm_bindgen::to_value(&result).unwrap();
            }

            for edge in graph.neighbors(current_idx) {
                if !self.visited.contains(&edge.to) {
                    self.came_from.entry(edge.to).or_insert(current_idx);
                    let h = self.compute_heuristic(edge.to);
                    self.open_set.push(edge.to, h);
                }
            }
        }

        self.done = true;
        let result = InstantResult {
            path: vec![],
            visited_count: self.visited_count,
            visited_nodes,
        };
        serde_wasm_bindgen::to_value(&result).unwrap()
    }
}
