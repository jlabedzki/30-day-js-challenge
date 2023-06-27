/**
 * Given an integer, return a counter function. This counter function intially
 * returns the integer passed in. Each time it is called, it returns the integer
 * passed in incremented by 1.
 */

function counter(n) {
  return () => n++;
}

const counterFn = counter(0);
console.log(counterFn()); // 0
console.log(counterFn()); // 1
console.log(counterFn()); // 2
