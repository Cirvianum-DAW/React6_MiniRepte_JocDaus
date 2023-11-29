function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

function getTirades(n) {
  return [...Array(n)].map(d6);
}

function sum(nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

export { d6, getTirades, sum };

// map(d6) is the same as map(() => d6())
