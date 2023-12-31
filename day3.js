/**
 * Write a function that accepts an initial integer and returns an object with
 * three methods:
 * - increment: increments the integer by 1
 * - decrement: decrements the integer by 1
 * - reset: resets the integer back to the initial integer
 */

function createCounter(init) {
  let count = init;
  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => {
    count = init;
    return count;
  };
  return {
    increment,
    decrement,
    reset,
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset()); // 10
