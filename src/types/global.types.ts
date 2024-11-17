import type { IUserElement } from './user.types'

export interface IResponse<T> {
  array: T[]
  length: number
}
// eslint-disable-next-line
export interface IArrayRes extends IResponse<IGlobalLines> {}
export interface IOneRes<T> {
  status: number
  data: { data: T }
}
export type TParams = {
  params: { id: number }
}
export interface IGlobalLines {
  id: number
  title: string
  description: string
  language: EnumLanguage
  user: IUserElement
  date: Date
  count_comments: number
  count_views: number
  count_likes: number
  namespace: TNamespaces
  preview: string
}
export type TAnswer = {
  id: number
  title: string
  is_vote: boolean
}
export type TTag = {
  id: number
  title: string
}
export interface IQueryLayout<T> {
  data: T
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  error: Error | null
}
export enum EnumLanguage {
  ENGLISH = 'english',
  RUSSIAN = 'russian',
}
export enum EnumItemType {
  POST = 'post',
  ALBUM = 'album',
  QUEST = 'quest',
}
export type TNamespaces =
  | 'posts'
  | 'albums'
  | 'podcasts'
  | 'quests'
  | 'surveys'
  | 'tests'
export type TPagination = {
  page?: string | number
  perPage: string | number
}
