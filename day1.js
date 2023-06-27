/**
 * Write a function that returns a function that returns "Hello World!"
 */

function createHelloWorld() {
  return () => "Hello World!";
}

const f = createHelloWorld();
console.log(f()); // Hello World!
