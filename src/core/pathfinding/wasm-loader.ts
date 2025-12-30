/**
 * WASM module loader and initialization
 */

import init, {
  WasmGraphHandle,
  AStarSolver,
  DijkstraSolver,
  BfsSolver,
  DfsSolver,
  GreedySolver,
  BidirectionalSolver,
} from '../../../wasm/pkg/pathfinding_wasm';

let wasmInitialized = false;
let initPromise: Promise<void> | null = null;

/**
 * Initialize the WASM module. Safe to call multiple times.
 */
export async function initWasm(): Promise<void> {
  if (wasmInitialized) return;
  if (initPromise) return initPromise;

  initPromise = init().then(() => {
    wasmInitialized = true;
    console.log('[WASM] Pathfinding module initialized');
  });

  return initPromise;
}

/**
 * Check if WASM is ready to use
 */
export function isWasmReady(): boolean {
  return wasmInitialized;
}

// Export the classes for use
export {
  WasmGraphHandle,
  AStarSolver,
  DijkstraSolver,
  BfsSolver,
  DfsSolver,
  GreedySolver,
  BidirectionalSolver,
};
