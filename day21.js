/**
 * Given an array `arr` and a chunk size `size`, return a chunked array. A
 * chunked array contains the original elements in `arr`, but consists of
 * subarrays each of length `size`. The length of the last subarray may be less
 * than `size` if arr.length is not evenly divisible by`size`.
 *
 * Please solve this without using lodash's `_.chunk()` method.
 */

function chunk(arr, size) {
  const output = [];
  let index = 0;

  while (index < arr.length) {
    output.push(arr.slice(index, index + size));
    index += size;
  }

  return output;
}

// Tests
console.log(chunk([1, 2, 3, 4], 2)); // [[1,2],[3,4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
