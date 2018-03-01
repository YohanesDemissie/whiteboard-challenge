const solution = require('../lib/solution');

describe('Solution should be made of only integers', () => {
  expect(solution.x).notToBe(null)
})
describe('Solution should be an integer', () => {
  expect(solution.results).notToBe(NaN)
})
describe('Solution function should pass in two integers as arguments', () => {
  expect(solution.args).toHavePropertyOf(Number)
})