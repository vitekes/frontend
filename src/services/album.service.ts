import { axiosClassic } from 'src/api/axios'
import type { IAlbum, IQnicAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'

class AlbumService {
  private BASE_URL = '/albums/'
  public async getAll(): Promise<IResponse<IAlbum>> {
    const { data } = await axiosClassic(this.BASE_URL)
    return data
  }
  public async getOne(
    id: number,
  ): Promise<{ data: { data: IQnicAlbum }; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}${id}`)
    return { data, status }
  }
}
const albumService = new AlbumService()
export default albumService
