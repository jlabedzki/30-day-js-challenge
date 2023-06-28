/**
 * Given a function, return a new function that is identical to the original
 * function except that it ensures the original is only called once.
 */

function once(fn) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

const add = (x, y) => x + y;
const addOnce = once(add);

console.log(addOnce(1, 2)); // 3
console.log(addOnce(2, 2)); // undefined
