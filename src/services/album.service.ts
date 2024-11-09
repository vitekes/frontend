import type { IAlbum } from 'src/types/album.types'
import { Service } from './types'

class AlbumService extends Service<IAlbum> {
  constructor() {
    super('/albums')
  }
}

export default new AlbumService()
