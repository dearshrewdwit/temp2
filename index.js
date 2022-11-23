// const { amicableNumbers } = require('./src/amicable-numbers.js')
const { take2 } = require('./src/take2.js')
//
const num = 100000

const runFunc = async () => {
  const ms1 = Date.now()

  const res = await take2(num)
  const ms2 = Date.now()
  console.log(`${num} calculations took: ${(ms2-ms1)/1000}s`)
  console.log(res)
}

runFunc()


// console.log(findExistingDivisors(8))

// # Amicable Numbers

// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
//
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284 because 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220 because 1 + 2 + 4 + 71 + 142 = 220. Hence, 284 and 220 are amicable numbers.
//
// Find all the amicable numbers under 100,000.

// [
//   [ 220, 284 ],     [ 1184, 1210 ],
//   [ 2620, 2924 ],   [ 5020, 5564 ],
//   [ 6232, 6368 ],   [ 10744, 10856 ],
//   [ 12285, 14595 ], [ 17296, 18416 ],
//   [ 63020, 76084 ], [ 66928, 66992 ],
//   [ 67095, 71145 ], [ 69615, 87633 ],
//   [ 79750, 88730 ]
// ]
