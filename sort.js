// Quicksort implementation with detailed comments.
// Sorts an array of numbers (or any comparable values) in ascending order.
// Time complexity: O(n log n) on average, O(n^2) in the worst case.
// Space complexity: O(log n) due to recursion stack (in-place partitioning).
function quickSort(arr, low = 0, high = arr.length - 1) {
  // Base case: a sub-array with 0 or 1 elements is already sorted.
  if (low < high) {
    // Partition the array and get the final index of the pivot element.
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the elements before the pivot.
    quickSort(arr, low, pivotIndex - 1);

    // Recursively sort the elements after the pivot.
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

// Partitions arr[low..high] around a pivot (the last element in the range).
// Elements smaller than the pivot end up to its left, larger ones to its right.
// Returns the index where the pivot finally lands.
function partition(arr, low, high) {
  // Choose the last element of the range as the pivot value.
  const pivot = arr[high];

  // `i` tracks the boundary of the "smaller than pivot" region.
  // Everything at index <= i (after increments) is known to be <= pivot.
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // If the current element is smaller than or equal to the pivot,
    // expand the "smaller" region and move this element into it.
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  // Place the pivot right after the last "smaller" element,
  // so everything to its left is <= pivot and everything to its right is >.
  swap(arr, i + 1, high);

  // Return the pivot's final resting position.
  return i + 1;
}

// Swaps two elements in an array in place.
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Example usage:
const numbers = [9, 3, 7, 1, 8, 2, 5];
console.log('Before:', numbers);
console.log('After:', quickSort(numbers));

module.exports = { quickSort };
