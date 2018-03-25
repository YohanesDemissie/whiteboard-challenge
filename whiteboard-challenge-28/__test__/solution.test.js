'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('highestScore', () => {
    it('should return null if no arguments passed', function () {
      expect(solution()).toBe(null); //testing for null if no content
    });
    // it('should return null if not a string', function () {
    //   expect(solution([1, 2, 3])).toEqual(string); //because not string will return null
    //});
    it('should return highest scoring word', function () {
      expect(solution('aa bb cc dd ee ff gg hh')).toEqual('h');
    });
  });
});
