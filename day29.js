/**
 * Write a generator function that returns a generator object which yields the
 * finacci sequence.
 *
 * The fibonacci sequence is defined by the relation `Xn = Xn-1 + Xn-2`.
 *
 * The first few numbers of the series are `0, 1, 1, 2, 3, 5, 8, 13`.
 */

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Tests
const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next().value); // 13
console.log(sequence.next().value); // 21
console.log(sequence.next().value); // 34
