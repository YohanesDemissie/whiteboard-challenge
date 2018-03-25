'use strict'

const solution = require('../lib/solution')

describe('Solution Module', function () {
  describe('#highWord', function () {
    it('should return null if no arguments passed', function () {
      expect(solution.highWord()).toEqual(null)
    })
    it('should return null if not a string', function () {
      expect(solution.highWord([1, 2, 3])).toEqual(null)
    })
    it('should return highest scoring word', function () {
      expect(solution.highWord('aa bb cc dd ee ff gg')).toEqual('gg')
    })
  })
})
