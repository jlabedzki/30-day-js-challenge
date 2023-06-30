/**
 * Write a class that allows getting and setting key-value pairs, however a
 * time until expiration is associated with each key.
 *
 * The class has three public methods:
 *
 * 1. set(key, value, duration): accepts an integer key, and integer value, and
 * a duration in milliseconds. Once the duration has elapsed, the key should
 * no longer be accessible. The method should return true if  the same
 * un-expired key already exists and false otherwise. Both the value and
 * duration should be overwritten if the key already exists.
 *
 * 2. get(key): if an un-expired key exists, it should return the associated
 * value. Otherwise it should return -1.
 *
 * 3. count(): returns the number of un-expired keys.
 */

class ExpiringMap {
  constructor() {
    this.map = {};
  }

  set(key, value, duration) {
    if (this.map[key]) {
      clearTimeout(this.map[key].timeout);
      this.map[key].timeout = setTimeout(() => {
        delete this.map[key];
      }, duration);
      this.map[key].value = value;
      return true;
    }

    this.map[key] = {
      value,
      timeout: setTimeout(() => {
        delete this.map[key];
      }, duration),
    };

    return false;
  }

  get(key) {
    if (this.map[key]) return this.map[key].value;
    return -1;
  }

  count() {
    return Object.keys(this.map).length;
  }
}

// Tests
const map = new ExpiringMap();
map.set(1, 1, 1000);
map.set(2, 2, 2000);
console.log(map.get(1)); // 1
console.log(map.get(3)); // -1
console.log(map.count()); // 2
setTimeout(() => console.log(map.count()), 1500); // 1
setTimeout(() => console.log(map.count()), 2500); // 0
