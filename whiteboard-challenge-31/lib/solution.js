'use strict'

const index = module.exports = {};

const one = [1, 2, 3, 4, 5]
const two = [9, 8, 7, 6, 5]
index.check = function (arr1, arr2) {
  let duplicate = [];
  for (let i in arr1) {
    if (arr2.includes(arr1[i])) {
      duplicate.push(arr1[i]);
    }
  }
  return duplicate;
};

module.exports = {}