import type { IStore } from 'src/store/store.types'

export const API_URL = process.env.NEXT_PUBLIC_SERVER_URL,
  IS_DEV: boolean = process.env.NODE_ENV === 'development',
  MEDIA_URL: string = `${process.env.NEXT_PUBLIC_MEDIA_URL}`,
  CLIENT_URL: string = `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
  IS_CLIENT = typeof window !== 'undefined',
  initialQueryParams: Pick<IStore, 'queryParams'> = {
    queryParams: {
      page: 1,
      perPage: 3,
    },
  }
