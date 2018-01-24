'use strict'

const cycle = require('../lib/solution.js')

describe('Cycle Module', function () {
  describe('#next', function () {
    it('should return false if there is null', function () {
      expect(cycle.next).not.toEqual(null)
    })
    it('it should return true if an index within the linked list is repeated', function () {
      expect(cycle.next).toEqual('input a loop type of thing here for verification')
    })
  })
})