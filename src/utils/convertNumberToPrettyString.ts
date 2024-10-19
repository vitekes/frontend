const roundUp = (num: number, precision: number = 1) => {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

const convertToPrettyString = (number: number): string => {
  let retNum: string
  const MILLIARD = 1000000000,
    MILLION = 1000000,
    HUNDRED = 1000

  if (number >= HUNDRED && number < MILLION) {
    retNum = roundUp(number / HUNDRED) + 'K'
  } else if (number >= MILLION && number < MILLIARD) {
    retNum = roundUp(number / MILLION) + 'M'
  } else if (number >= MILLIARD) {
    retNum = roundUp(number / MILLIARD) + 'MLDR'
  } else {
    retNum = `${number}`
  }
  return retNum
}
export default convertToPrettyString
