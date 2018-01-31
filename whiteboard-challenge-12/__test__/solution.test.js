'use strict';

const TwoStackQueue = require('../lib/solution.js')

describe('Queue Module', () => {
  beforeEach(() => this.queue = new TwoStackQueue());
  describe('#Properties', () => {
    it('should validate an object', () => {
      expect(this.queue).toBeInstanceOf(Object); //PASSED OBJECT
    });

    it('should return length of stack', () => {
      let q = new TwoStackQueue()
      // let stack = new TwoStackQueue;
      q.inbox.push(12)
      q.inbox.push(34)
      q.inbox.push(5)
      q.inbox.push(22)

      expect(q.inbox.push(5)).toEqual(5);
    });

    it('should return two stacks', () => {
      let stacks = new TwoStackQueue;
      expect(stacks).toEqual({ "inbox": [], "outbox": [] }); //PASSED MAXXSIZE
    });
  });
})