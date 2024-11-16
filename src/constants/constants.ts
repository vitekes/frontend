import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import type { IStore } from 'src/store/store.types'

export const API_URL = process.env.NEXT_PUBLIC_SERVER_URL,
  IS_DEV: boolean = process.env.NODE_ENV === 'development',
  CLIENT_URL: string = `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
  IS_CLIENT = typeof window !== 'undefined',
  initialQueryParams: Pick<IStore, 'queryParams'> = {
    queryParams: {
      page: 1,
      perPage: 8,
    },
  },
  allItems = {
    page: 1,
    perPage: 10000000000,
  },
  PLACEHOLDER_IMG: PlaceholderValue =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABOUExUReLm7OLm7OLm7OHl6+Dk6uDk697i6NLX3tbb4tre5djd5Nzh59DV3dfb4s3S29TY4M/U3L/Fz7S7xcLI0dzg59HW3s3S2s7T293i6P///wx7HCAAAAACdFJOU/79P6CPqgAAAAFiS0dEGexutYgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoCw4UCCE+U+SXAAAAQ0lEQVQI12NgYIICBjgLyGZiYmZmYWFlBjPZ2Dk4udjATG4eXj5+bghTQFBIWASiQFRMnEcCoo0FCCDa4IYxMkABIwBlqQHivYpWQQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMS0xNFQyMDowODozMyswMDowMPzxUA8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTEtMTRUMjA6MDg6MzMrMDA6MDCNrOizAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTExLTE0VDIwOjA4OjMzKzAwOjAw2rnJbAAAAABJRU5ErkJggg=='
