/**
 * Write a function that accepts two deeply nested objects or arrays and returns
 * a new object representing their differences.
 *
 * The function should compare the properties of the two objects and identify
 * any changes. The returned object should only contain keys where the value is
 * different from obj1 to obj2. For each changed key, the value should be
 * represented as an array [obj1Value, obj2Value]. Keys that exist in one object
 * but not the other should not be included in the returned object. When
 * comparing two arrays, the indices of the arrays are considered to be their
 * keys. The end result should be a deeply nested object where each leaf value
 * is a difference array.
 */

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function diff(obj1, obj2) {
  const output = {};
  Object.keys(obj1)
    .filter((key) => key in obj2)
    .forEach((key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];

      if (Array.isArray(value1) && Array.isArray(value2)) {
        const diffValue = diff(
          Object.fromEntries(value1.map((item, index) => [index, item])),
          Object.fromEntries(value2.map((item, index) => [index, item]))
        );
        if (Object.keys(diffValue).length > 0) {
          output[key] = diffValue;
        }
      } else if (isObject(value1) && isObject(value2)) {
        const diffValue = diff(value1, value2);
        if (Object.keys(diffValue).length > 0) {
          output[key] = diffValue;
        }
      } else if (obj1[key] !== obj2[key]) {
        output[key] = [obj1[key], obj2[key]];
      }
    });

  return output;
}

// Tests
const obj1 = {
  a: 1,
  b: 2,
  c: [1, 2, 3, 5],
  d: { e: 5, f: 6 },
  g: null,
  h: { i: 7 },
  j: [1, 2, 4, [2, 5, 7]],
};
const obj2 = {
  a: 2,
  b: 2,
  c: [1, 2, 3, 4],
  d: { e: 6 },
  g: "hello",
  h: "foo",
  j: [1, 2, 3, [1]],
};

console.log(JSON.stringify(diff(obj1, obj2)));
