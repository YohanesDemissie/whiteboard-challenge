'use strict';

const binarySearch = require('../binary-search/lib/binary-solution.js');

describe('testing testing', function () {
  describe('#binarySearch Module', function () {
    it('should make sure the "num" is an integer', function () {
      let filter = new binarySearch.check;
      let num = 5;
      const arr = [0, 0, 1, 1, 2, num, 5, 5, 6, 11, 7, 54, 60];
      expect(num).not.toBe(NaN);
    })
    it('should find the "num" through the filtered array', function () {
      let num = 5;
      const arr = [0, 0, 1, 1, 2, num, 5, 5, 6, 11, 7, 54, 60];
      expect(binarySearch.check(arr, num)).toBe(5);
    });
    it('should print the steps through our binary tree to return our num value', function () {
      let num = 54;
      const arr = [0, 0, 1, 1, 2, num, 5, 5, 6, 11, 7, 54, 60];
      expect(binarySearch.check(arr, num)).toBe(54);
    });
  });
});