use std::collections::{HashMap, HashSet, VecDeque};
use wasm_bindgen::prelude::*;

use crate::graph::{WasmGraph, WasmGraphHandle};
use crate::types::{InstantResult, WasmGraphNode, WasmPathfindingStep};

/// BFS (Breadth-First Search) pathfinding algorithm solver
#[wasm_bindgen]
pub struct BfsSolver {
    graph_ptr: *const WasmGraph,
    start_idx: usize,
    end_idx: usize,

    queue: VecDeque<usize>,
    came_from: HashMap<usize, usize>,
    visited: HashSet<usize>,

    visited_count: u32,
    done: bool,
    started: bool,
}

#[wasm_bindgen]
impl BfsSolver {
    #[wasm_bindgen(constructor)]
    pub fn new(
        graph_handle: &WasmGraphHandle,
        start_id: &str,
        end_id: &str,
    ) -> Result<BfsSolver, JsValue> {
        let graph = &graph_handle.graph;

        let start_idx = graph
            .get_index(start_id)
            .ok_or_else(|| JsValue::from_str("Start node not found"))?;

        let end_idx = graph
            .get_index(end_id)
            .ok_or_else(|| JsValue::from_str("End node not found"))?;

        let capacity = graph.node_count() / 4;

        let mut solver = BfsSolver {
            graph_ptr: graph as *const WasmGraph,
            start_idx,
            end_idx,
            queue: VecDeque::with_capacity(capacity),
            came_from: HashMap::with_capacity(capacity),
            visited: HashSet::with_capacity(capacity),
            visited_count: 0,
            done: false,
            started: false,
        };

        solver.queue.push_back(start_idx);
        solver.visited.insert(start_idx);

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

        if self.done || self.queue.is_empty() {
            self.done = true;
            let step = WasmPathfindingStep::Complete {
                path: vec![],
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        let current_idx = self.queue.pop_front().unwrap();
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
                self.visited.insert(edge.to);
                self.came_from.insert(edge.to, current_idx);
                self.queue.push_back(edge.to);
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

        while let Some(current_idx) = self.queue.pop_front() {
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
                    self.visited.insert(edge.to);
                    self.came_from.insert(edge.to, current_idx);
                    self.queue.push_back(edge.to);
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
