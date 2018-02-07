'use strict';

const solution = require('../solution');
const k_ary = require('../lib/k-ary-tree');

describe('Solution Module', () => {
  describe('arr', () => {
    it('should make sure our values are integers', () => {
      this.tree = new k_ary()
      expect(solution.arr(this.tree)).not.toEqual(NaN); //check
    });
  });

  describe('Sum', () => {
    it('should accumulate our values', () => {
      this.tree = new k_ary().insert(1).insert(2, 1).insert(3, 2).insert(7, 2).insert(9, 2);
      expect(solution.arr(this.tree)).toEqual(13); //check!
     // console.log(this.tree)
    });

  describe('New thing', function () {
    it('should double check a new instance of tree with different values still accumulates the sum, accurately', () => {
      this.tree = new k_ary().insert(12, 1).insert(15, 12).insert(45, 12); //12 is the new parent value that we must pass in to each new child
      expect(solution.arr(this.tree)).toEqual(72);
      });
    });
  });
});