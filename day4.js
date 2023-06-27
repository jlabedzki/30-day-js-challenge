/**
 * Given an integer array and a mapping function, return a new array with a
 * transformation applied to each element. Solve it without the built in map
 * method.
 */

function map(arr, fn) {
  const newArr = [];
  arr.forEach((item) => newArr.push(fn(item)));
  return newArr;
}

console.log(map([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
console.log(map([1, 2, 3], (x) => x + 1)); // [2, 3, 4]
console.log(map([1, 2, 3], (x) => x.toString())); // ['1', '2', '3']
