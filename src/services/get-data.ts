import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import albumService from './album.service'

export async function getAlbums(): Promise<IResponse<IAlbum>> {
  const results = await albumService.getAll()
  return results
}
