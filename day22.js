/**
 * Given a multi-dimensional array `arr` and a depth `n`, return a flattened
 * version of that array.
 *
 * A multi-dimensional array is a recursive data structure that contains
 * integers or other multi-dimensional arrays.
 *
 * A flattened array is a version of that array with some or all of the
 * sub-arrays removed and replaced with the actual elements in that sub-array.
 * This flattening operation should only be done if the current depth of nesting
 * is less than `n`. The depth of the elements in the first array are considered
 * to be 0.
 *
 * Please solve it without the built-in Array.flat method.
 */

function flatten(arr, n) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && n > 0) {
      result.push(...flatten(item, n - 1));
    } else {
      result.push(item);
    }
  });
  return result;
}

// Tests
console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 1)); // [1, 2, 3, 4, 5, 6, [7, 8, 9]]
console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatten([1, [2, [3, [4, [5]]]]], 1)); // [1, 2, [3, [4, [5]]]]
console.log(flatten([1, [2, [3, [4, [5]]]]], 4)); // [1, 2, 3, 4, 5]
