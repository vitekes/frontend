import type { IGlobalForm, IGlobalLines, TIdsArray } from './global.types'

export interface IQnicAlbum extends IGlobalLines {
  photos: { id: number; photo: string }[]
}
export interface IAlbumForm extends Omit<IGlobalForm, 'content'> {
  deleted_photos_set: TIdsArray
  photos_set: TIdsArray
  in_progress: boolean
  tags: string
  blog: number
}
