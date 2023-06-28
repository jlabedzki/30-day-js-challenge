/**
 * Given a function, return a memoized version of that function.
 *
 * A memoized function is a function that will never be called twice with the
 * same inputs. Instead it will return a cached value.
 *
 * You can assume 3 possible input functions: sum, fib, and factorial.
 *
 * sum: takes in two numbers and returns the sum of the two numbers
 * fib: takes in an integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2)
 * factorial: takes in an integer n and returns 1 if n <= 1 or n * factorial(n - 1)
 */

function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

let callCount = 0;

const sum = (x, y) => {
  callCount++;
  return x + y;
};

const memoizedSum = memoize(sum);

console.log(memoizedSum(1, 2)); // 3
console.log(memoizedSum(1, 2)); // 3
console.log("callCount", callCount); // 1
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4
console.log("callCount", callCount); // 2
