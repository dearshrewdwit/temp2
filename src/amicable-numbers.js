const fs = require('fs/promises')
// source code
const amicableNumbers = async (num = 100000) => {
  const friends = []
  const times = []
  for (let i = 1; i < num; i++) {
    const ms1 = Date.now()
    if (friends.includes(i)) continue

    const sumOfDivisorsA = findSumOfDivisorsOf(i)
    // let sumOfDivisorsA = 0
    // for (let i = 0; i < divisorsOfA.length; i++) {
    //   sumOfDivisorsA += divisorsOfA[i]
    // }
    //const sumOfDivisorsA = divisorsOfA.reduce((a,b) => a+b, 0)

    if (i === sumOfDivisorsA) continue

    const sumOfDivisorsb = findSumOfDivisorsOf(sumOfDivisorsA)
    // let sumOfDivisorsb = 0
    // for (let i = 0; i < divisorsOfB.length; i++) {
    //   sumOfDivisorsb += divisorsOfB[i]
    // }
    // const sumOfDivisorsb = divisorsOfB.reduce((a,b) => a+b, 0)

    if (sumOfDivisorsb === i) {
      friends.push(i, sumOfDivisorsA)
    }
    const ms2 = Date.now()
    times.push(ms2-ms1)
    // console.log(`this iteration for ${i} took: ${ms2-ms1}`)
  }

  await fs.writeFile('times.txt', times.toString())
  return friends
}


const findSumOfDivisorsOf = (num) => {
  let sum = 0
  // const divisors = []
  for (let i=0; i < num; i++) {
    if (num % i === 0) {
      sum += i
      // divisors.push(i)
    }
  }
  return sum//[sum, divisors]
}//[...Array(num).keys()].filter(divisor => num % divisor === 0)

module.exports = {
  amicableNumbers: amicableNumbers,
  // findDivisorsOf: findDivisorsOf
}
