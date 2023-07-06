/**
 * Write a function that checks if a given value is an instance of a given class
 * or superclass. For this problem, an object is considered an instance of a
 * given class if that object has access to that class's methods.
 *
 * There are no constraints on the data types that can be passed to the
 * function. For example, the value or the class could be undefined.
 */

function isInstanceOf(value, cls) {
  if (value === null || value === undefined) return false;

  const currentProto = Object.getPrototypeOf(value);
  const targetProto = cls.prototype;

  if (currentProto === targetProto) return true;

  return value instanceof cls;
}

// Tests
class Foo {}
class Bar extends Foo {}
const foo = new Foo();
const bar = new Bar();

console.log(isInstanceOf(foo, Foo)); // true
console.log(isInstanceOf(foo, Object)); // true
console.log(isInstanceOf(bar, Foo)); // true
console.log(isInstanceOf(5, Number)); // true
console.log(isInstanceOf("hi", String)); // true
console.log(isInstanceOf(false, Number)); // false
