/**
 * Given an object, return a valid JSON string of that object. You may assume
 * the object only includes strings, integers, arrays, objects, booleans, and
 * null. The returned string should not include extra spaces. The order of the
 * keys should be the same as the order returned by Object.keys().
 *
 * Please solve it without using JSON.stringify().
 */

function stringify(obj) {
  if (Array.isArray(obj)) {
    const arr = obj.map((item) => stringify(item));
    return `[${arr.join(",")}]`;
  }

  if (typeof obj === "object") {
    const arr = Object.keys(obj).map(
      (key) => `"${key}":${stringify(obj[key])}`
    );
    return `{${arr.join(",")}}`;
  }

  if (typeof obj === "string") return `"${obj}"`;

  return String(obj);
}

// Tests
console.log(stringify({ a: 1, b: 2 })); // '{"a":1,"b":2}'
console.log(stringify({ a: 1, b: "foo", c: [1, 2, 3] })); // '{"a":1,"b":"foo","c":[1,2,3]}'
console.log(stringify({ a: 1, b: "foo", c: [1, 2, 3, { foo: "bar" }] })); // '{"a":1,"b":"foo","c":[1,2,3,{"foo":"bar"}]}'
console.log(null); // 'null'
