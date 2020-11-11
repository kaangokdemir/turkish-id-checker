import { Result } from './classes'

const checkId = (payload: string | number): Result => {
  let result = new Result()
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
    let [a, b, c, d, e, f, g, h, i, j, k] = payload.split('').map(Number)
    if (a === 0) {
      result.display = "First letter can't be 0"
    }
    // Try Cases
    else {
      let case1 =
        ((7 * (a + c + e + g + i) - (b + d + f + h)) / 10)
          .toFixed(1)
          .toString()
          .slice(-1) === j.toString()
      let case2 =
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
        result.display = "This is M.K. Atatürk's ID Number!"
        result.status = true
      }
    }
  }

  return result
}

const getRandomNumberBetween = (min: number, max: number): number => {
  min = Math.ceil(min); // Minimum is inclusive
  max = Math.floor(max); // Maximum is exclusive
  return Math.floor(Math.random() * (max - min) + min);
}

const generateId = (): string => {
  const firstNineDigits = "" + getRandomNumberBetween(100000000, 1000000000);
  let oddsAndEvensSum: [number, number] = [0, 0];

  firstNineDigits.split("").forEach((digit, index) => {
    oddsAndEvensSum[index % 2] += parseInt(digit, 10);
  });

  const [oddsSum, evensSum] = oddsAndEvensSum;

  const tenthDigit = (7 * oddsSum - evensSum) % 10;
  const eleventhDigit = (oddsSum + evensSum + tenthDigit) % 10;

  return firstNineDigits + tenthDigit + eleventhDigit;
}

module.exports = { checkId, generateId };
