'use strict';

const loop = require('../lib/solution.js');

describe('loop module', function () {
  describe('#counter', function () {
    it('should return a number', function () {
      expect(loop.check(10, () => { console.log(counter)}))
    })
    it('it should contain numeric data and not a string', function () {
      expect(loop.check(10, () => { console.log(counter) }))
    })
    it('should have 2 arguments', function () {
      expect(loop.check(2, () => {console.log(counter) }))
     })
   })
})
