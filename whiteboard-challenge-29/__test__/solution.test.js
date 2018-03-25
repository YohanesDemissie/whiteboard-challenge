'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function () {
  let anagram1 = ['acre', 'act', 'race', 'cat', 'tac', 'care', 99];
  let anagram2 = ['acre', 'race', 'care', 'act', 'cat', 'tac'];

  describe('#sortAnagrams', function () {
    it('should return No Content if no arguments passed', function () {
      expect(solution.sortAnagrams()).toEqual('No Content');
    });
    it('should return No Content if empty array', function () {
      expect(solution.sortAnagrams([])).toEqual('No Content');
    });
    it('should remove any element that is not a string', function () {
      expect(solution.sortAnagrams(anagram1)).toEqual(anagram2);
    });
  });
});