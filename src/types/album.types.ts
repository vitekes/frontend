import type { TLanguage } from './global.types'
import { IUserElement } from './user.types'

export interface IAlbum {
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

export interface IQnicAlbum extends IAlbum {
  photos: { id: number; photo: string }[]
}
