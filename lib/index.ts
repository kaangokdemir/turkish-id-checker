import { Result } from '../helpers/classes'
import { getRandomNumberBetween } from '../helpers'

const checkId = (payload: string | number): Result => {
  const result = new Result()
  if (typeof payload === 'number') {
    payload = payload.toString()
  }
  if (typeof payload !== 'string') {
    result.display = 'Unaccepted Type'
    return result
  }
  if (payload.match(/^[0-9]+$/) === null) {
    result.display = 'ID should only contain numbers.'
  } else if (payload.length !== 11) {
    result.display = 'ID should be 11 digits length'
  }
  // We're certain input is 11 digit string
  else {
    const [a, b, c, d, e, f, g, h, i, j, k] = payload.split('').map(Number)
    if (a === 0) {
      result.display = 'First letter can\'t be 0'
    }
    // Try Cases
    else {
      const case1 =
        ((7 * (a + c + e + g + i) - (b + d + f + h)) / 10)
          .toFixed(1)
          .toString()
          .slice(-1) === j.toString()
      const case2 =
        (a + b + c + d + e + f + g + h + j + i).toString().slice(-1) ===
        k.toString()
      if (case1 && case2) {
        result.display = 'This is a valid Turkish National ID'
        result.status = true
      } else {
        result.display = 'Invalid Turkish National ID'
      }
      // BONUS
      if (payload === '10000000146') {
        result.display = 'This is M.K. Atatürk\'s ID Number!'
        result.status = true
      }
    }
  }

  return result
}

const generateId = (): string => {
  const firstNineDigits = getRandomNumberBetween(
    100000000,
    1000000000,
  ).toString()
  const oddsAndEvensSum: [number, number] = [0, 0]

  firstNineDigits.split('').forEach((digit, index) => {
    oddsAndEvensSum[index % 2] += parseInt(digit, 10)
  })

  const [oddsSum, evensSum] = oddsAndEvensSum

  const tenthDigit = Math.abs(7 * oddsSum - evensSum) % 10
  const eleventhDigit = (oddsSum + evensSum + tenthDigit) % 10

  return firstNineDigits + tenthDigit + eleventhDigit
}

module.exports = { checkId, generateId }
