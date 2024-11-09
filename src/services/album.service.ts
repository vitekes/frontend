import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { IAlbum } from 'src/types/album.types'
import type { IArrayRes, IOneRes } from 'src/types/global.types'

class AlbumService {
  private readonly BASE_URL = '/albums'
  public async getAll(
    queryData = initialQueryParams.queryParams,
  ): Promise<IArrayRes> {
    const { data } = await axiosClassic<IArrayRes>(this.BASE_URL + '/', {
      params: queryData,
    })

    return data
  }
  public async getOne(id: number): Promise<IOneRes<IAlbum>> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { data, status }
  }
}
const albumService = new AlbumService()
export default albumService
