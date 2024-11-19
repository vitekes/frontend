import type { TIdsArray } from './global.types'

export interface IFeed {
  id: number
  title: string
}
export interface IFeedForm {
  title: string
  type: string
  genres_set: TIdsArray
  categories_set: TIdsArray
}
