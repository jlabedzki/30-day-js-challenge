/**
 * Write code that enchances all arrays such that you can all the array.last()
 * method to get the last element in the array. If there are no elements in the
 * array, return -1.
 */

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

// Tests
console.log([1, 2, 3].last()); // 3
console.log([].last()); // -1
