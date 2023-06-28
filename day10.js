/**
 * Given a function, return a curried version of that function.
 *
 * A curried function is a function that accepts fewer or an equal number of
 * arguments than the original function. The curried function returns a new
 * function that accepts the remaining arguments. It continues to do so until
 * all arguments have been supplied.
 *
 * In practical terms, if you called the original function like sum(1, 2, 3),
 * you would call the curred version like csum(1)(2)(3), csum(1)(2, 3),
 * csum(1, 2)(3), or csum(1, 2, 3). All these methods of calling the curried
 * function would return the same result as calling the original function.
 */

function curry(fn) {
  return (...args) => {
    if (args.length >= fn.length) return fn(...args);
    return curry(fn.bind(null, ...args));
  };
}

const sum = (x, y, z) => x + y + z;
const csum = curry(sum);

console.log(csum(1)(2)(3)); // 6
console.log(csum(1)(2, 3)); // 6
console.log(csum(1, 2)(3)); // 6
console.log(csum(1, 2, 3, 4)); // 6
