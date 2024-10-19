export const API_URL = process.env.SERVER_URL,
  IS_DEV: boolean = process.env.NODE_ENV === 'development',
  MEDIA_URL: string = `${process.env.MEDIA_URL}`,
  CLIENT_URL: string = `${process.env.CLIENT_URL}`,
  IS_CLIENT = typeof window !== 'undefined'
