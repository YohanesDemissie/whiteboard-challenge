'use strict';

const k_ary = require('./lib/k-ary-tree.js'); //require in our tree constructor
const solution = module.exports = {}; //outsorce our solution file

solution.arr = function (root) { //creating a function iterating through the branches of our root
  let tree = new k_ary();
  tree = root; 
  if (!tree.root) return new Error('Invalid input'); //error first method
  let results = []; //our array that will hold all node values
  let output = function (current) { //the meat and potatoes 
  results.push(current.val.val);  
  };
  tree.breadthFirst(output);
  var sum = results.reduce((a, b) => a + b, 0);
  // console.log(results, 'results')
  return sum;
};