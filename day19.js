/**
 * Write a function that converts an array of objects `arr` into a matrix `m`.
 *
 * `arr` is an array of objects or arrays. Each item in the array can be deeply
 * nested with child arrays and child objects. It can also contain numbers,
 * strings, booleans, and null values.
 *
 * The first row `m` should be the column names. If there is no nesting,
 * the column names are the unique keys within the objects. If there is nesting,
 * the column names are the respective paths in the object separated by ".".
 *
 * Each of the remaining rows corresponds to an object in `arr`. Each value in
 * the matrix corresponds to a value in an object. If a given object doesn't
 * containt a value for a given column, the cell should contain an empty string.
 *
 * The columns in the matrix should be in lexographically ascending order.
 */

function arrToMatrix(arr) {
  const output = [];
  const columns = new Set();

  function setColumns(obj, prefix = "") {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        setColumns(item, `${prefix}${index}.`);
      });
    } else if (typeof obj === "object" && obj !== null) {
      Object.keys(obj).forEach((key) => {
        setColumns(obj[key], `${prefix}${key}.`);
      });
    } else {
      columns.add(prefix.slice(0, -1));
    }
  }

  arr.forEach((item) => setColumns(item));
  output.push([...columns].sort());

  arr.forEach((item) => {
    const row = [];
    output[0].forEach((column) => {
      const path = column.split(".");
      let value = item;
      path.forEach((key) => {
        value = value[key] ?? "";
      });
      row.push(value);
    });
    output.push(row);
  });

  return output;
}

// Tests
const arr = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  [{ c: 5 }],
  { d: 2 },
  { bro: null },
  { e: { f: 3 } },
  { e: { g: { h: [4] } } },
  [{ c: 7 }],
  { bro: "foo" },
];

console.log(arrToMatrix(arr));
