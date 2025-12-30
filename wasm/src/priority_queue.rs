use ordered_float::OrderedFloat;
use std::cmp::Reverse;
use std::collections::BinaryHeap;

/// A min-heap priority queue.
/// Uses Reverse to convert BinaryHeap (max-heap) to min-heap behavior.
pub struct MinHeap<T> {
    heap: BinaryHeap<Reverse<(OrderedFloat<f64>, T)>>,
}

impl<T: Ord> MinHeap<T> {
    pub fn new() -> Self {
        MinHeap {
            heap: BinaryHeap::new(),
        }
    }

    pub fn with_capacity(capacity: usize) -> Self {
        MinHeap {
            heap: BinaryHeap::with_capacity(capacity),
        }
    }

    /// Push an item with a given priority (lower priority = extracted first)
    #[inline]
    pub fn push(&mut self, item: T, priority: f64) {
        self.heap.push(Reverse((OrderedFloat(priority), item)));
    }

    /// Pop the item with the lowest priority
    #[inline]
    pub fn pop(&mut self) -> Option<T> {
        self.heap.pop().map(|Reverse((_, item))| item)
    }

    /// Check if the heap is empty
    #[inline]
    pub fn is_empty(&self) -> bool {
        self.heap.is_empty()
    }

    /// Get the number of items in the heap
    #[inline]
    pub fn len(&self) -> usize {
        self.heap.len()
    }
}

impl<T: Ord> Default for MinHeap<T> {
    fn default() -> Self {
        Self::new()
    }
}
