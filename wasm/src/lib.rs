mod algorithms;
mod graph;
mod heuristic;
mod priority_queue;
mod types;

pub use algorithms::{
    AStarSolver, BfsSolver, BidirectionalSolver, DfsSolver, DijkstraSolver, GreedySolver,
};
pub use graph::WasmGraphHandle;

use wasm_bindgen::prelude::*;

/// Initialize the WASM module (sets up panic hook for better error messages)
#[wasm_bindgen(start)]
pub fn init() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
