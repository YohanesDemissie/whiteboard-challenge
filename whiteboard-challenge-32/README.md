#PROBLEM DOMAIN
The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively
ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

#RESOURCES
#ITERATIVE SOLUTIONS
var fib = [0, 1];
for (var i = fib.length; i < 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
//console.log(fib);