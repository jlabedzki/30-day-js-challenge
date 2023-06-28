/**
 * Given an array of functions, return a new function that is the function
 * composition of the input functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of [] is the identity function f(x) = x.
 *
 * You may assume each function in the array accepts one integer as input and
 * returns one integer as output.
 */

function compose(fns) {
  return (x) => {
    let acc = x;
    fns.forEach((fn) => {
      acc = fn(acc);
    });
    return acc;
  };
}

const addOne = (x) => x + 1;
const addTwo = (x) => x + 2;
const addThree = (x) => x + 3;

const addOneAddTwoAddThree = compose([addOne, addTwo, addThree]);
console.log(addOneAddTwoAddThree(0)); // 6
console.log(addOneAddTwoAddThree(1)); // 7
console.log(addOneAddTwoAddThree(2)); // 8
