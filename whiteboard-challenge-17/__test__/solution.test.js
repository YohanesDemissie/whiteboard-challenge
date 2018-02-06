'use strict';
//add em up!
//var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
//console.log(sum); // 6

const solution = require('../solution');
const k_ary = require('../lib/k-ary-tree');

describe('Solution Module', () => {

  beforeAll(() => {
    this.oneNode = new k_ary().insert(1, 1);
    this.tree = new k_ary().insert(1, 1).insert(2, 1).insert(3, 1).insert(4, 1);
    this.emptyNode = new k_ary();
  });

  describe('arr', () => {
    it('should..', () => {
      console.log(solution.arr(this.tree));
      expect(solution.arr(this.oneNode)).toBeInstanceOf(Array);
      console.log(solution.arr(this.oneNode));
    });
  });
  describe('Valid input/output with two childless nodes', () => {
    it('should return an array', () => {
      expect(solution.arr(this.tree)).toBeInstanceOf(Array);
      console.log(solution.arr(this.tree));
    });
    it('should return an array with two nodes', () => {
      expect(solution.arr(this.tree).length).toEqual(3);
      console.log((this.tree).length);
    });
    it('should return an array with two nodes, with values of 2, 3 and 4', () => {
      expect(solution.arr(this.tree)[0].val).toEqual(2);
      expect(solution.arr(this.tree)[1].val).toEqual(3);
      expect(solution.arr(this.tree)[2].val).toEqual(4);
    });
  });
  describe('Invalid input/output', () => {
    it('should return error if nothing in tree', () => {
      expect(solution.arr(this.emptyNode)).toBeInstanceOf(Error);
    });
    it('should return error message if nothing in tree', () => {
      expect(solution.arr(this.emptyNode).message).toEqual('Invalid input');
    });
  });
});