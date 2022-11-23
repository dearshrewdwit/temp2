// const fs = require('fs/promises')
// source code
const globalDivisors = {
  1: [],
  2: [1],
  3: [1],
}

const amicableNumbers = async (num = 100000) => {
  const friends = []
  const times = []
  for (let i = 2; i < num; i++) {
    // const ms1 = Date.now()
    if (friends.includes(i)) continue

    const sumOfDivisorsA = findSumOfDivisorsOf(i)

    if (i === sumOfDivisorsA) continue

    const sumOfDivisorsb = findSumOfDivisorsOf(sumOfDivisorsA)

    if (sumOfDivisorsb === i) {
      friends.push(i, sumOfDivisorsA)
    }

    // const ms2 = Date.now()
    // times.push(ms2-ms1)
  }

  // await fs.writeFile('times.txt', times.toString())
  return friends
}

const findSumOfDivisorsOf = (num) => {
  if (num === 0) return 0
  if (num > 2) {
    findExistingDivisors(num)
  }
  const divisors = globalDivisors[num]
  let sum = 0
  for (let i=0; i < divisors.length; i++) {
    sum += divisors[i]
  }
  return sum
}

const findExistingDivisors = (num) => {
  for (let i = 2; i <= num /2; i++) {
    if (num % i === 0 && globalDivisors[num/i]) {
      const newDivisors = [...globalDivisors[num/i]]
      newDivisors.push(i, num/i)
      const currentDivisors = globalDivisors[num] || []
      globalDivisors[num] = [...(new Set(currentDivisors.concat(newDivisors)))]
    } else if (!globalDivisors[num]) {
      globalDivisors[num] = [1]
    }
  }
  return globalDivisors
}

module.exports = {
  take2: amicableNumbers,
  // findExistingDivisors: findExistingDivisors
}
