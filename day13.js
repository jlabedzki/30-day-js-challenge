/**
 * Given an array of asyncronous functions and a pool limit, return an
 * asyncronous function `promisePool`. It should return a promise that resolves
 * when all the input functions resolve.
 *
 * Pool limit is the maximum number of functions that can be running at the same
 * time. Once the pool limit is reached, the next function should wait until
 * there is a spot open in the pool. `promisePool` should begin execution of as
 * many functions as possible and continue executing new functions when old
 * promises resolve.
 *
 * When the last function resolves, `promisePool` should also resolve.
 */

function promisePool(fns, limit) {
  if (fns.length <= limit) return Promise.all(fns.map((fn) => fn()));

  const pool = fns.slice(0, limit);
  const remaining = fns.slice(limit);
  const results = [];

  return new Promise(async (resolve) => {
    while (pool.length) {
      const fn = pool.shift();
      results.push(await fn());

      if (remaining.length) pool.push(remaining.shift());
      if (results.length === fns.length) resolve(results);
    }
  });
}

// Tests
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const t = Date.now();
promisePool([() => sleep(1000), () => sleep(2000)], 1).then(() =>
  console.log(Date.now() - t)
); // ~3000 - should log second

const t2 = Date.now();
promisePool([() => sleep(1000), () => sleep(2000)], 2).then(() =>
  console.log(Date.now() - t2)
); // ~2000 - should log first
