/**
 * Write code that enhances all arrays such that you can call the
 * array.groupBy(fn) method on any array and it will return a grouped version
 * of that array.
 *
 * A grouped array is an object where each key is the output of `fn(arr[i])` and
 * each value is an array containing all items in the original array with that
 * key.
 *
 * The provided callback `fn` will accept an item in the array and return a
 * string key.
 *
 * The order of each value list should be the order the items appear in the
 * array. Any order of keys is acceptable.
 *
 * Please solve it without lodash's _.groupBy method.
 */

Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((item) => {
    const key = fn(item);
    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  });
  return result;
};

// Tests
console.log([1, 2, 3].groupBy((i) => i % 2 === 0)); // { 'false': [1, 3], 'true': [2] }
console.log([1, 2, 3].groupBy((i) => i % 3)); // { '0': [3], '1': [1], '2': [2] }
console.log(["hi", "bye", "hello", "goodbye"].groupBy((i) => i.length <= 3)); // { 'false': ['goodbye', 'hello'], 'true': ['bye', 'hi'] }
