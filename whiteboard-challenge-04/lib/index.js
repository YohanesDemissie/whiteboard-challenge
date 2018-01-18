'use strict';

const index = module.exports = {};

// index.check = function () {
  const first = ['ajax', 'bunny', 'berenger', 'carrot'];
  const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];

  index.check = function (arr1, arr2) {
    let duplicate = [];
    for (let i in arr1) {
      if (arr2.includes(arr1[i])) {
        duplicate.push(arr1[i]);
      }
    }
    return duplicate;
  };
//}
//index.check(first, second);