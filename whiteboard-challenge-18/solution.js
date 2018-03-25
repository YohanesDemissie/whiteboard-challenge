'use strict';

const k_ary = require('./lib/k-ary-tree.js'); //require in our tree constructor
const solution = module.exports = {}; //outsorce our solution file

solution.arr = function (root) { //creating a function iterating through the branches of our root
  let tree = new k_ary();
  tree = root;
  if (!tree.root) return new Error('Invalid input'); //error first method
  let results = []; //our array that will hold all node values

  let output = function (current) { //the meat and potatoes
  results.push(current.val.children.length);

  // results.push(current.val.children.length);
  };
  tree.breadthFirst(output);
  console.log(Math.max(...results))
};


