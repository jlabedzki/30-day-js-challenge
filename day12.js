/**
 * Given an asyncronous function and a time in milliseconds, return a new time
 * limited version of the input function.
 *
 * A time limited function is a function that is identical to the original
 * unless it takes longer than the time limit to execute. In that case, it
 * should return a rejected promise "Time limit exceeded".
 */

function timeLimit(fn, ms) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      let timeout = setTimeout(() => {
        reject("Time limit exceeded");
      }, ms);
      fn(...args).then((result) => {
        clearTimeout(timeout);
        resolve(result);
      });
    });
  };
}

// Tests
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fn = timeLimit(sleep, 1000);
let t = Date.now();
fn(500)
  .then(() => console.log(Date.now() - t))
  .catch((err) => console.log(err)); // ~500

fn(2000)
  .then(() => console.log(Date.now() - t))
  .catch((err) => console.log(err)); // Time limit exceeded
