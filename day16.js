/**
 * Given a function and a time in milliseconds, return a throttled version of
 * that function.
 *
 * A throttled function is first called without delay and then, for a time
 * interval of `t` milliseconds, can't be executed but should store the latest
 * function arguments provided to call the function with them after the end of
 * the delay.
 */

function throttle(fn, ms) {
  let timeout;
  let fnArgs;
  return (...args) => {
    if (!timeout) {
      fn(...args);
    }
    fnArgs = args;
    timeout = setTimeout(() => {
      if (fnArgs) fn(...fnArgs);
      fnArgs = null;
    }, ms);
  };
}

// Tests
const log = throttle(console.log, 500);
log("1"); // logged immediately
log("2"); // delayed 500ms
log("3"); // arguments overwrite previous call, logged after 500ms
setTimeout(() => log("Hello"), 1000); // logged immediately after the timeout

// should expect to see the following output:
// 1
// 3
// Hello
