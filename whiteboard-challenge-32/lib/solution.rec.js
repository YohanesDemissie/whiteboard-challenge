var fib = [0, 1];

const solution = module.exports = {}

solution.itr = function (fib, n) {
  for (let i = fib.length; i < 10; i++) {
    fib[i] = fib[i - 2] + fib[i -1]
  }
  return fib[n]
};

