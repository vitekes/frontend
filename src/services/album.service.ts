import { axiosClassic } from 'src/api/axios'
import type { IAlbum, IQnicAlbum } from 'src/types/album.types'
import type { IResponse, TPagination } from 'src/types/global.types'

class AlbumService {
  private readonly BASE_URL = '/albums'
  public async getAll(
    queryData = { page: 1, perPage: 3 } as TPagination,
  ): Promise<IResponse<IAlbum>> {
    const { data } = await axiosClassic<IResponse<IAlbum>>(
      this.BASE_URL + '/',
      {
        params: queryData,
      },
    )
    return data
  }
  public async getOne(
    id: number,
  ): Promise<{ data: { data: IQnicAlbum }; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { data, status }
  }
}
const albumService = new AlbumService()
export default albumService
