'use strict'

const index = require('../lib/solution')

describe('validate array, make sure there are no strings, make sure it is made of intigers', () => {
  expect(index.check).toHavePropertyOf(Array)
  expect(array).toNotEqual('')
  expect(array).toNotBe(NaN)
})



