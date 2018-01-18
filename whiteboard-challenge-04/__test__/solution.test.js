'use strict';

const index = require('../lib/index.js');

  describe('Array Module', function () {
    describe('#check', function () {
      it('should return all duplicated indecies from each other', function () {
        expect(index.check(['ajax', 'bunny', 'berenger', 'carrot'],  ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red']))
      })
    })
  })


