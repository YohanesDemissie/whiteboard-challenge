'use strict';

const solution = require('../lib/solution.js')
const SLL = require('../lib/single-linked.js')


describe('Duplicates Module', () => {
  describe('#head', function () {
    let sll = new SLL() //required in
    sll.insertHead(3)
    sll.insertHead(6)
    sll.insertHead(9)
    sll.insertHead(9)
    sll.insertHead(12)
    sll.insertHead(15)

    let filter = solution(sll.head);
    expect(filter.next).toBe(3)
    expect(sll.head.next.next).toBe(6)
    // expect(filter.next.next.val).toBe(9)
    // expect(filter.next.next.next.val).toBe(12)
    // expect(filter.next.next.next.next.val).toBe(15)

    // it('should filter duplicated 9, to only one 9', () => {
    //   expect(secondList.val).not.toBe(NaN)
    // })
  })
})
