import { differenceInDays, format, isSameMonth, type Locale } from 'date-fns'
import { ru } from 'date-fns/locale'
const declOfNum = (
  number: number,
  titles: [string, string, string],
): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}
export const convertDate = (
  date: Date,
  formatToConvert: string = 'd MMMM yyyy',
  locale: Locale = ru,
): string => format(date, formatToConvert, { locale })

export const convertDateRadius = (
  start_date: Date,
  end_date: Date,
  locale: Locale = ru,
): string => {
  let formattedDate: string
  const daysDifference = differenceInDays(end_date, start_date)
  const daysWord = declOfNum(daysDifference, ['день', 'дня', 'дней'])

  if (isSameMonth(start_date, end_date)) {
    formattedDate = `${format(start_date, 'd', { locale })}-${format(end_date, 'd LLLL yyyy', { locale })} (${daysDifference} ${daysWord})`
  } else {
    formattedDate = `${format(start_date, 'd LLLL', { locale })} - ${format(end_date, 'd LLLL yyyy', { locale })} (${daysDifference} ${daysWord})`
  }
  return formattedDate
}
