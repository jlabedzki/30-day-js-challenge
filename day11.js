/**
 * Given a positive integer in milliseconds, write an asynchronous function that
 * sleeps for that number of milliseconds. It can resolve any value.
 */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let t = Date.now();
sleep(1000).then(() => console.log(Date.now() - t)); // ~1000
sleep(2000).then(() => console.log(Date.now() - t)); // ~2000
