import type { IUserElement } from './user.types'

export interface IResponse<T> {
  count: number
  next: string
  previous: null
  results: T[]
}
export interface IGlobalLines {
  id: number
  title: string
  description: string
  language: TLanguage
  user: IUserElement
  date: Date
  count_comments: number
  count_views: number
  count_likes: number
  namespace: string
  preview: string
}
export type TResponse<T> = {
  length: number
  array: T[]
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
export type TPagination = {
  page?: string | number
  perPage: string | number
}
