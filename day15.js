/**
 * Given a function and a time in milliseconds, return a debounced version of
 * that function.
 *
 * A debounced function is a function whos execution is delayed by the specified
 * number of milliseconds and whos execution is cancelled if it is called again
 * within that window of time. The debounced function should also recieve the
 * passed parameters.
 */

function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}

// Tests
const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // logged after 100ms
