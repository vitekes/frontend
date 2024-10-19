const slicerTxt = (txt: string, end: number = 200): string =>
  `${txt.slice(0, end)}${txt.length > end ? '...' : ''}`

export default slicerTxt
