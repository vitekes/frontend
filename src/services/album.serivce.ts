import { axiosClassic } from 'src/api/axios'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'

class AlbumService {
  private BASE_URL = '/albums'
  public async getAll(): Promise<IResponse<IAlbum>> {
    const { data } = await axiosClassic(this.BASE_URL)
    return data
  }
}
const albumService = new AlbumService()
export default albumService
