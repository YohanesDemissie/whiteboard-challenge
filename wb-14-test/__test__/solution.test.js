'use strict';

const dedupe = require('../lib/solution');
const SLL = require('../lib/sll');

describe('Solution Module', () => {
  describe('#dedupe', () => {
    it('filter out duplicates and return single values', () => {
      let singleLink = new SLL(); //required in
      singleLink.insertHead(5);
      singleLink.insertHead(5);
      singleLink.insertHead(4);
      singleLink.insertHead(1);

      let newSll = dedupe(singleLink.head); //.head required in from solution,js
      expect(newSll.value).toBe(1); //chain commands required in
      expect(newSll.next.value).toBe(4);
      expect(newSll.next.next.value).toBe(5);
    });

    // it('should throw an error if the list arg is falsey', () => {
    //   expect(() => dedupe(null)).toThrow('Error: head is falsey'); //new testing method Steve taught me.
    //   expect(() => dedupe(NaN)).toThrow('Error: head is falsey');
    //   expect(() => dedupe(undefined)).toThrow('Error: head is falsey');
    // });
    // it('should throw an error if the list arg is falsey', () => {
    //   expect(() => dedupe(null)).toThrow('Error: head is falsey'); //new testing method Steve taught me.
    //   expect(() => dedupe(NaN)).toThrow('Error: head is falsey');
    //   expect(() => dedupe(undefined)).toThrow('Error: head is falsey');
    // });

    it('should work properly if a single node list is passed in', () => {
      let linkedList = new SLL();
      linkedList.insertHead(1);
      let newSll = dedupe(linkedList.head);
      expect(newSll.value).toBe(1);
      expect(newSll.next).toBe(null);
    });
  });
});