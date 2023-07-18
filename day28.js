/**
 * Create a class `ArrayWrapper` that accepts an array of integers in it's
 * constructor. The class should have two features:
 *
 * 1. When two instanceds of this class are added together with the + operator,
 * the resulting value is the sum of all the elements in both arrays.
 *
 * 2. When the `String()` function is called on the instance, it will return a
 * comma separated string surrounded by brackets. For example, `[1,2,3]`.
 */

class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  [Symbol.toPrimitive](hint) {
    return hint === "string"
      ? `[${this.arr.join(",")}]`
      : this.arr.reduce((acc, curr) => acc + curr, 0);
  }
}

// Tests
const arr1 = new ArrayWrapper([1, 2, 3]);
const arr2 = new ArrayWrapper([4, 5, 6]);
console.log(arr1 + arr2); // 21
console.log(String(arr1)); // [1,2,3]
console.log(arr1 + 1); // 7
