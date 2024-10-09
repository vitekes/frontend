const convertToPrettyString = (number: number): string => {
  let retNum: string
  const MILLIARD = 1000000000,
    MILLION = 1000000,
    HUNDRED = 1000

  if (number >= HUNDRED && number < MILLION) {
    retNum = Math.floor(number / HUNDRED) + 'K'
  } else if (number >= MILLION && number < MILLIARD) {
    retNum = Math.floor(number / MILLION) + 'M'
  } else if (number >= MILLIARD) {
    retNum = Math.floor(number / MILLIARD) + 'MLDR'
  } else {
    retNum = `${number}`
  }
  return retNum
}
export default convertToPrettyString
