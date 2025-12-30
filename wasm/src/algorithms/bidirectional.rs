use std::collections::{HashMap, HashSet};
use wasm_bindgen::prelude::*;

use crate::graph::{WasmGraph, WasmGraphHandle};
use crate::heuristic::equirectangular_distance;
use crate::priority_queue::MinHeap;
use crate::types::{InstantResult, WasmGraphNode, WasmPathfindingStep};

/// Bidirectional A* pathfinding algorithm solver
/// Searches from both start and end simultaneously
#[wasm_bindgen]
pub struct BidirectionalSolver {
    graph_ptr: *const WasmGraph,
    start_idx: usize,
    end_idx: usize,

    // Forward search state
    forward_open: MinHeap<usize>,
    forward_came_from: HashMap<usize, usize>,
    forward_g: HashMap<usize, f64>,
    forward_visited: HashSet<usize>,
    forward_h_cache: HashMap<usize, f64>,

    // Backward search state
    backward_open: MinHeap<usize>,
    backward_came_from: HashMap<usize, usize>,
    backward_g: HashMap<usize, f64>,
    backward_visited: HashSet<usize>,
    backward_h_cache: HashMap<usize, f64>,

    // Best meeting point
    best_meeting: Option<usize>,
    best_cost: f64,

    // Output state
    visited_count: u32,
    done: bool,
    started: bool,
    search_forward: bool, // Alternate between forward and backward
}

#[wasm_bindgen]
impl BidirectionalSolver {
    #[wasm_bindgen(constructor)]
    pub fn new(
        graph_handle: &WasmGraphHandle,
        start_id: &str,
        end_id: &str,
    ) -> Result<BidirectionalSolver, JsValue> {
        let graph = &graph_handle.graph;

        let start_idx = graph
            .get_index(start_id)
            .ok_or_else(|| JsValue::from_str("Start node not found"))?;

        let end_idx = graph
            .get_index(end_id)
            .ok_or_else(|| JsValue::from_str("End node not found"))?;

        let capacity = graph.node_count() / 8;

        let mut solver = BidirectionalSolver {
            graph_ptr: graph as *const WasmGraph,
            start_idx,
            end_idx,

            forward_open: MinHeap::with_capacity(capacity),
            forward_came_from: HashMap::with_capacity(capacity),
            forward_g: HashMap::with_capacity(capacity),
            forward_visited: HashSet::with_capacity(capacity),
            forward_h_cache: HashMap::with_capacity(capacity),

            backward_open: MinHeap::with_capacity(capacity),
            backward_came_from: HashMap::with_capacity(capacity),
            backward_g: HashMap::with_capacity(capacity),
            backward_visited: HashSet::with_capacity(capacity),
            backward_h_cache: HashMap::with_capacity(capacity),

            best_meeting: None,
            best_cost: f64::INFINITY,

            visited_count: 0,
            done: false,
            started: false,
            search_forward: true,
        };

        // Initialize forward search from start
        solver.forward_g.insert(start_idx, 0.0);
        let h_forward = solver.compute_forward_heuristic(start_idx);
        solver.forward_open.push(start_idx, h_forward);

        // Initialize backward search from end
        solver.backward_g.insert(end_idx, 0.0);
        let h_backward = solver.compute_backward_heuristic(end_idx);
        solver.backward_open.push(end_idx, h_backward);

        Ok(solver)
    }

    fn compute_forward_heuristic(&mut self, node_idx: usize) -> f64 {
        if let Some(&h) = self.forward_h_cache.get(&node_idx) {
            return h;
        }

        let graph = unsafe { &*self.graph_ptr };
        let node = graph.get_node(node_idx);
        let goal = graph.get_node(self.end_idx);
        let h = equirectangular_distance(node.lat, node.lon, goal.lat, goal.lon);
        self.forward_h_cache.insert(node_idx, h);
        h
    }

    fn compute_backward_heuristic(&mut self, node_idx: usize) -> f64 {
        if let Some(&h) = self.backward_h_cache.get(&node_idx) {
            return h;
        }

        let graph = unsafe { &*self.graph_ptr };
        let node = graph.get_node(node_idx);
        let start = graph.get_node(self.start_idx);
        let h = equirectangular_distance(node.lat, node.lon, start.lat, start.lon);
        self.backward_h_cache.insert(node_idx, h);
        h
    }

    fn reconstruct_path(&self, meeting_idx: usize) -> Vec<WasmGraphNode> {
        let graph = unsafe { &*self.graph_ptr };
        let mut path = Vec::new();

        // Build forward path (start to meeting)
        let mut current = meeting_idx;
        let mut forward_path = Vec::new();
        loop {
            forward_path.push(current);
            if let Some(&prev) = self.forward_came_from.get(&current) {
                current = prev;
            } else {
                break;
            }
        }
        forward_path.reverse();

        // Build backward path (meeting to end)
        current = meeting_idx;
        let mut backward_path = Vec::new();
        while let Some(&next) = self.backward_came_from.get(&current) {
            backward_path.push(next);
            current = next;
        }

        // Combine paths
        for &idx in &forward_path {
            path.push(graph.node_to_output(idx));
        }
        for &idx in &backward_path {
            path.push(graph.node_to_output(idx));
        }

        path
    }

    fn step_forward(&mut self) -> Option<(usize, String)> {
        let graph = unsafe { &*self.graph_ptr };

        if self.forward_open.is_empty() {
            return None;
        }

        let current_idx = self.forward_open.pop().unwrap();

        if self.forward_visited.contains(&current_idx) {
            return self.step_forward();
        }

        self.forward_visited.insert(current_idx);
        self.visited_count += 1;

        // Check if backward search has visited this node
        if self.backward_visited.contains(&current_idx) {
            let cost = self.forward_g[&current_idx] + self.backward_g[&current_idx];
            if cost < self.best_cost {
                self.best_cost = cost;
                self.best_meeting = Some(current_idx);
            }
        }

        let current_g = self.forward_g[&current_idx];

        for edge in graph.neighbors(current_idx) {
            if self.forward_visited.contains(&edge.to) {
                continue;
            }

            let tentative_g = current_g + edge.weight;
            let neighbor_g = self.forward_g.get(&edge.to).copied().unwrap_or(f64::INFINITY);

            if tentative_g < neighbor_g {
                self.forward_came_from.insert(edge.to, current_idx);
                self.forward_g.insert(edge.to, tentative_g);
                let h = self.compute_forward_heuristic(edge.to);
                let f = tentative_g + h;
                self.forward_open.push(edge.to, f);

                // Check if this creates a better meeting point
                if let Some(&backward_g) = self.backward_g.get(&edge.to) {
                    let cost = tentative_g + backward_g;
                    if cost < self.best_cost {
                        self.best_cost = cost;
                        self.best_meeting = Some(edge.to);
                    }
                }
            }
        }

        Some((current_idx, graph.get_node(current_idx).id.clone()))
    }

    fn step_backward(&mut self) -> Option<(usize, String)> {
        let graph = unsafe { &*self.graph_ptr };

        if self.backward_open.is_empty() {
            return None;
        }

        let current_idx = self.backward_open.pop().unwrap();

        if self.backward_visited.contains(&current_idx) {
            return self.step_backward();
        }

        self.backward_visited.insert(current_idx);
        self.visited_count += 1;

        // Check if forward search has visited this node
        if self.forward_visited.contains(&current_idx) {
            let cost = self.forward_g[&current_idx] + self.backward_g[&current_idx];
            if cost < self.best_cost {
                self.best_cost = cost;
                self.best_meeting = Some(current_idx);
            }
        }

        let current_g = self.backward_g[&current_idx];

        for edge in graph.neighbors(current_idx) {
            if self.backward_visited.contains(&edge.to) {
                continue;
            }

            let tentative_g = current_g + edge.weight;
            let neighbor_g = self.backward_g.get(&edge.to).copied().unwrap_or(f64::INFINITY);

            if tentative_g < neighbor_g {
                self.backward_came_from.insert(edge.to, current_idx);
                self.backward_g.insert(edge.to, tentative_g);
                let h = self.compute_backward_heuristic(edge.to);
                let f = tentative_g + h;
                self.backward_open.push(edge.to, f);

                // Check if this creates a better meeting point
                if let Some(&forward_g) = self.forward_g.get(&edge.to) {
                    let cost = tentative_g + forward_g;
                    if cost < self.best_cost {
                        self.best_cost = cost;
                        self.best_meeting = Some(edge.to);
                    }
                }
            }
        }

        Some((current_idx, graph.get_node(current_idx).id.clone()))
    }

    fn should_terminate(&self) -> bool {
        // Terminate when both open sets are empty
        if self.forward_open.is_empty() && self.backward_open.is_empty() {
            return true;
        }

        // Terminate immediately when a meeting point is found
        self.best_meeting.is_some()
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

        if self.done {
            let step = WasmPathfindingStep::Complete {
                path: vec![],
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // Check termination
        if self.should_terminate() {
            self.done = true;
            let path = if let Some(meeting) = self.best_meeting {
                self.reconstruct_path(meeting)
            } else {
                vec![]
            };
            let step = WasmPathfindingStep::Complete {
                path,
                visited_count: self.visited_count,
            };
            return serde_wasm_bindgen::to_value(&step).unwrap();
        }

        // Alternate between forward and backward search
        let result = if self.search_forward {
            self.search_forward = false;
            if !self.forward_open.is_empty() {
                self.step_forward().map(|(_, id)| (id, "forward"))
            } else if !self.backward_open.is_empty() {
                self.step_backward().map(|(_, id)| (id, "backward"))
            } else {
                None
            }
        } else {
            self.search_forward = true;
            if !self.backward_open.is_empty() {
                self.step_backward().map(|(_, id)| (id, "backward"))
            } else if !self.forward_open.is_empty() {
                self.step_forward().map(|(_, id)| (id, "forward"))
            } else {
                None
            }
        };

        match result {
            Some((node_id, direction)) => {
                let step = WasmPathfindingStep::Visit {
                    node_id,
                    visited_count: self.visited_count,
                    from_direction: Some(direction.to_string()),
                };
                serde_wasm_bindgen::to_value(&step).unwrap()
            }
            None => {
                // Both searches exhausted
                self.done = true;
                let path = if let Some(meeting) = self.best_meeting {
                    self.reconstruct_path(meeting)
                } else {
                    vec![]
                };
                let step = WasmPathfindingStep::Complete {
                    path,
                    visited_count: self.visited_count,
                };
                serde_wasm_bindgen::to_value(&step).unwrap()
            }
        }
    }

    #[wasm_bindgen(js_name = isDone)]
    pub fn is_done(&self) -> bool {
        self.done
    }

    #[wasm_bindgen(js_name = runToCompletion)]
    pub fn run_to_completion(&mut self) -> JsValue {
        let graph = unsafe { &*self.graph_ptr };
        let mut visited_nodes: Vec<WasmGraphNode> = Vec::new();

        while !self.forward_open.is_empty() || !self.backward_open.is_empty() {
            // Forward step
            if !self.forward_open.is_empty() {
                if let Some(current_idx) = self.forward_open.pop() {
                    if !self.forward_visited.contains(&current_idx) {
                        self.forward_visited.insert(current_idx);
                        self.visited_count += 1;
                        visited_nodes.push(graph.node_to_output(current_idx));

                        if self.backward_visited.contains(&current_idx) {
                            let cost = self.forward_g[&current_idx] + self.backward_g[&current_idx];
                            if cost < self.best_cost {
                                self.best_cost = cost;
                                self.best_meeting = Some(current_idx);
                            }
                        }

                        let current_g = self.forward_g[&current_idx];
                        for edge in graph.neighbors(current_idx) {
                            if !self.forward_visited.contains(&edge.to) {
                                let tentative_g = current_g + edge.weight;
                                let neighbor_g = self.forward_g.get(&edge.to).copied().unwrap_or(f64::INFINITY);
                                if tentative_g < neighbor_g {
                                    self.forward_came_from.insert(edge.to, current_idx);
                                    self.forward_g.insert(edge.to, tentative_g);
                                    let h = self.compute_forward_heuristic(edge.to);
                                    self.forward_open.push(edge.to, tentative_g + h);

                                    if let Some(&backward_g) = self.backward_g.get(&edge.to) {
                                        let cost = tentative_g + backward_g;
                                        if cost < self.best_cost {
                                            self.best_cost = cost;
                                            self.best_meeting = Some(edge.to);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Backward step
            if !self.backward_open.is_empty() {
                if let Some(current_idx) = self.backward_open.pop() {
                    if !self.backward_visited.contains(&current_idx) {
                        self.backward_visited.insert(current_idx);
                        self.visited_count += 1;
                        visited_nodes.push(graph.node_to_output(current_idx));

                        if self.forward_visited.contains(&current_idx) {
                            let cost = self.forward_g[&current_idx] + self.backward_g[&current_idx];
                            if cost < self.best_cost {
                                self.best_cost = cost;
                                self.best_meeting = Some(current_idx);
                            }
                        }

                        let current_g = self.backward_g[&current_idx];
                        for edge in graph.neighbors(current_idx) {
                            if !self.backward_visited.contains(&edge.to) {
                                let tentative_g = current_g + edge.weight;
                                let neighbor_g = self.backward_g.get(&edge.to).copied().unwrap_or(f64::INFINITY);
                                if tentative_g < neighbor_g {
                                    self.backward_came_from.insert(edge.to, current_idx);
                                    self.backward_g.insert(edge.to, tentative_g);
                                    let h = self.compute_backward_heuristic(edge.to);
                                    self.backward_open.push(edge.to, tentative_g + h);

                                    if let Some(&forward_g) = self.forward_g.get(&edge.to) {
                                        let cost = tentative_g + forward_g;
                                        if cost < self.best_cost {
                                            self.best_cost = cost;
                                            self.best_meeting = Some(edge.to);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Early termination - stop immediately when meeting point is found
            if self.best_meeting.is_some() {
                break;
            }
        }

        self.done = true;
        let path = if let Some(meeting) = self.best_meeting {
            self.reconstruct_path(meeting)
        } else {
            vec![]
        };
        let result = InstantResult {
            path,
            visited_count: self.visited_count,
            visited_nodes,
        };
        serde_wasm_bindgen::to_value(&result).unwrap()
    }
}
