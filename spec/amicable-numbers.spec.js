// test code
// import the source code
const { amicableNumbers, findDivisorsOf } = require('../src/amicable-numbers.js')

describe('amicableNumbers', () => {
  it('finds divisors', () => {
    expect(findDivisorsOf(220)).toEqual([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110])
  })
})
