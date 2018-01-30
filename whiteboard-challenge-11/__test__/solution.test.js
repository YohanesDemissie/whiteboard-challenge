'use strict'

const findNum = require('../lib/solution.js') //require in file name

describe('Array Module', () => {
  describe('#Array', () => {
    it('should only have numbers', () => {
      expect(findNum.check.array).not.toEqual(NaN)
    })
    it('should be a number', () => {
      expect(findNum.check.n).not.toEqual(NaN)
    })
    it('make sure the difference and missing num hold the same value based off whatever value is given to n', () => {
      expect(findNum.check.difference).toEqual(findNum.check.missingNum)
    })
  })
})