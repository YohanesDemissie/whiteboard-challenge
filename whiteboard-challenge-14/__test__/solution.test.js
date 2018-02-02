'use strict';

const solution = require('../solution.js')
const Stack = require('../lib/solution-sll.js')


describe('Duplicates Module', () => {
  describe('#head', function () {
    let linkedList = new SLL()

    let secondList = list(linkedList.head)

    it('should make sure there is a stack', () => {
      expect(secondList.val).not.toBe(NaN)
    })
  })
})
