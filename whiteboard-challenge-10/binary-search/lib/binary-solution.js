'use strict';

const binarySearch = module.exports = {};

const num = 3;
const arr = [0, 0, 1, 1, 2, num, 5, 5, 6, 11, 7, 54, 60];
//binarySearch
binarySearch.check = function (arr, num, l, r) {
  if (arr instanceof Array) {
    l = isNaN(l) ? 0 : l; //left half of binary tree
    r = isNaN(r) ? arr.length - 1 : r; //right half of binary tree
    let mid = l + 1 + Math.round((r - l) / 2 - 1); //middle dividin piont
    // console.log(l, r, mid, arr[mid]);
    if (num === mid[arr]) {
      return mid;
    }
    if (num === arr[mid]) {
      console.log(arr[mid]);
      return num;
    }
    // test cases
    if (typeof arr[mid] === 'undefined' || l === r) {
      console.log('not found'); //test case
      return -1;
    }

    if (num < arr[mid]) {
      console.log('take left'); //direction of binarySearch(binary/branch)

      return binarySearch.check(arr, num, l, r - mid); //return array length - right half
    }

    console.log('take right'); //or take right, display path
    return binarySearch.check(arr, num, mid, r); //return right half of array

  }
};
//binarySearch();
//console.log(binarySearch([0, 0, 1, 1, 2, 3, 5, 5, 6, 11, 7, 54], 1));
//binarySearch()
//binarySearch(arr, num); to find our numer


//console.log(arr[num], 'shit')