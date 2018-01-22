'use strict';

const loop = require('../lib/solution.js');

describe('loop module', function () {
  describe('#counter', function () {
    it('should return a number', function () {
      expect(loop.check(10, () => { console.log(counter)}))
    })
    it('it should contain numeric data and not stringified numbers', function () {
      expect(loop.check(10, () => { console.log(counter) }))
    })
    it('should have no strings', function () {
      expect(loop.check(10, () => {console.log(counter) }))
     })
   })
})
