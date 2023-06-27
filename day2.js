function counter(n) {
  return () => n++;
}

const counterFn = counter(0);
console.log(counterFn()); // 0
console.log(counterFn()); // 1
console.log(counterFn()); // 2
