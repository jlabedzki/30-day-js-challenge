/**
 * Given two objects, check if they are deeply equal.
 *
 * For two objects to be deeply equal, they must contain the same keys, and the
 * associated values must also be deeply equal. Two objects are considered
 * deeply equal if they pass the `===` equality check.
 *
 * You may assume both objects are the output of JSON.parse. In other words,
 * they are valid JSON objects.
 *
 * Please solve it without using lodash's _.isEqual() function.
 */

function deepEquals(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    const key1 = obj1[key];
    const key2 = obj2[key];
    if (Array.isArray(key1) && Array.isArray(key2)) {
      if (!deepArrayEquals(key1, key2)) return false;
    } else if (typeof key1 === "object" && typeof key2 === "object") {
      if (!deepEquals(key1, key2)) return false;
    } else {
      if (key1 !== key2) return false;
    }
  }

  return true;
}

function deepArrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  arr1.forEach((item, i) => {
    if (Array.isArray(item) && Array.isArray(arr2[i])) {
      if (!deepArrayEquals(item, arr2[i])) return false;
    } else if (typeof item === "object" && typeof arr2[i] === "object") {
      if (!deepEquals(item, arr2[i])) return false;
    } else {
      if (item !== arr2[i]) return false;
    }
  });

  return true;
}

// Tests
const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: [1, 2, { a: 1, b: 2 }, [1, 2, 3]],
  },
};
const obj2 = { ...obj1 };
const obj3 = {
  a: [4, 5],
  b: 2,
  c: {
    d: 3,
    e: {
      a: [4, 5],
    },
  },
};

console.log(deepEquals(obj1, obj2)); // true
console.log(deepEquals(obj1, obj3)); // false
