/**
 * Enhance all functions to have the `callPolyfill` method. The method accepts
 * an object `obj` as it's first parameter and any number of additional
 * arguments. The `obj` becomes the `this` context for the function. The
 * additional arguments are passed to the function (that the `callPolyfill`
 * method belongs on).
 */

Function.prototype.callPolyfill = function (obj, ...args) {
  return this.apply(obj, args);
};

// Tests
function increment() {
  this.count++;
  return this.count;
}

console.log(increment.callPolyfill({ count: 0 })); // 1
console.log(increment.callPolyfill({ count: 1 })); // 2
