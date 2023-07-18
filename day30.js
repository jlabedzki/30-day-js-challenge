/**
 * Given a multi-dimensional array of integers, return a generator object which
 * yields integers in the same order as inorder traversal.
 *
 * A multi-dimensional array is a recursive data structure that contains both
 * integers and other multi-dimensional arrays.
 *
 * inorder traversal iterates over each array from left to right, yielding any
 * integers it encounters or applying inorder traversal to any arrays it
 * encounters.
 */

function* inorderTraversal(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item);
    } else {
      yield item;
    }
  }
}

// Tests
const arr = [1, [2, 3], [4, [5, 6]]];
const sequence = inorderTraversal(arr);
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 4
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 6
console.log(sequence.next().value); // undefined
