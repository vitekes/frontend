import type { IGlobalLines } from './global.types'

export interface IAlbum extends IGlobalLines {}

export interface IQnicAlbum extends IAlbum {
  photos: { id: number; photo: string }[]
}
