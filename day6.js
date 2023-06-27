/**
 * Given an integer array, a reducer function, and an initial value, return
 * a reduced array. The reducer function takes in the current accumulator
 * value, the current element, and the current index.
 * If the length of the array is 0, return the initial value.
 * Solve it without the built in reduce method.
 */

function reduce(arr, fn, init) {
  let acc = init;
  arr.forEach((item) => {
    acc = fn(acc, item);
  });
  return acc;
}

console.log(reduce([1, 2, 3], (acc, x) => acc + x, 0)); // 6
console.log(reduce([2, 2, 2, 2], (acc, x) => acc * x, 1)); // 16
console.log(reduce([1, 2, 3], (acc, x) => acc.concat(x), [])); // [1, 2, 3]
