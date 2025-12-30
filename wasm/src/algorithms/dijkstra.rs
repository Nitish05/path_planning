use std::collections::{HashMap, HashSet};
use wasm_bindgen::prelude::*;

use crate::graph::{WasmGraph, WasmGraphHandle};
use crate::priority_queue::MinHeap;
use crate::types::{InstantResult, WasmGraphNode, WasmPathfindingStep};

/// Dijkstra's pathfinding algorithm solver
#[wasm_bindgen]
pub struct DijkstraSolver {
    graph_ptr: *const WasmGraph,
    start_idx: usize,
    end_idx: usize,

    open_set: MinHeap<usize>,
    came_from: HashMap<usize, usize>,
    distance: HashMap<usize, f64>,
    visited: HashSet<usize>,

    visited_count: u32,
    done: bool,
    started: bool,
}

#[wasm_bindgen]
impl DijkstraSolver {
    #[wasm_bindgen(constructor)]
    pub fn new(
        graph_handle: &WasmGraphHandle,
        start_id: &str,
        end_id: &str,
    ) -> Result<DijkstraSolver, JsValue> {
        let graph = &graph_handle.graph;

        let start_idx = graph
            .get_index(start_id)
            .ok_or_else(|| JsValue::from_str("Start node not found"))?;

        let end_idx = graph
            .get_index(end_id)
            .ok_or_else(|| JsValue::from_str("End node not found"))?;

        let capacity = graph.node_count() / 4;

        let mut solver = DijkstraSolver {
            graph_ptr: graph as *const WasmGraph,
            start_idx,
            end_idx,
            open_set: MinHeap::with_capacity(capacity),
            came_from: HashMap::with_capacity(capacity),
            distance: HashMap::with_capacity(capacity),
            visited: HashSet::with_capacity(capacity),
            visited_count: 0,
            done: false,
            started: false,
        };

        solver.distance.insert(start_idx, 0.0);
        solver.open_set.push(start_idx, 0.0);

        Ok(solver)
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

        let current_dist = self.distance[&current_idx];

        for edge in graph.neighbors(current_idx) {
            if self.visited.contains(&edge.to) {
                continue;
            }

            let new_dist = current_dist + edge.weight;
            let old_dist = self.distance.get(&edge.to).copied().unwrap_or(f64::INFINITY);

            if new_dist < old_dist {
                self.came_from.insert(edge.to, current_idx);
                self.distance.insert(edge.to, new_dist);
                self.open_set.push(edge.to, new_dist);
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

            let current_dist = self.distance[&current_idx];

            for edge in graph.neighbors(current_idx) {
                if self.visited.contains(&edge.to) {
                    continue;
                }

                let new_dist = current_dist + edge.weight;
                let old_dist = self.distance.get(&edge.to).copied().unwrap_or(f64::INFINITY);

                if new_dist < old_dist {
                    self.came_from.insert(edge.to, current_idx);
                    self.distance.insert(edge.to, new_dist);
                    self.open_set.push(edge.to, new_dist);
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
