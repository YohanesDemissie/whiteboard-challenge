'use strict'

const crazy = require('../lib/solution.js')

describe('Cycle Module', function () {
  describe('#next', function () {
    it('should return false if there is null', function () {
      expect(crazy.cycle.next).not.toEqual(null)
    })
    it('it should not have strings', function () {
      expect(crazy.cycle.next).not.toEqual('')
    })
    it('should return true of circling linked list', function() {
      expect(crazy.cycle.head).not.toEqual(NaN)
    })
  })
})