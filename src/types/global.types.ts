export interface IResponse<T> {
  count: number
  next: string
  previous: null
  results: T[]
}
export interface IQueryLayout<T> {
  data: T
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  error: Error | null
}
export type TLanguage = 'english' | 'russian'
export type TItemType = 'post' | 'album' | 'quest'
