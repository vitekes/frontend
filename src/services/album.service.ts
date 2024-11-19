import type { IGlobalLines } from 'src/types/global.types'
import { Service } from './types'

class AlbumService extends Service<IGlobalLines> {
  constructor() {
    super('/albums')
  }
}

export default new AlbumService()
