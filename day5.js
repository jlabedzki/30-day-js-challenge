/**
 * Given an integer array and a filtering function, return a new array with a
 * fewer or equal number of elements. The returned array should only contain
 * elements that pass the filtering function. Don't use the built in filter
 * method.
 */

function filter(arr, fn) {
  const newArr = [];
  arr.forEach((item) => {
    if (fn(item)) newArr.push(item);
  });
  return newArr;
}

console.log(filter([1, 2, 3], (x) => x > 1)); // [2, 3]
console.log(filter([1, 2, 3], (x) => x < 3)); // [1, 2]
console.log(filter([1, 2, 3], (x) => x === 2)); // [2]
