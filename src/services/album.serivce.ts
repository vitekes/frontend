import { axiosClassic } from 'src/api/axios'

class AlbumService {
  private BASE_URL = '/albums'
  public async getAll() {
    const { data } = await axiosClassic(this.BASE_URL)
    return data
  }
}
const albumService = new AlbumService()
export default albumService
