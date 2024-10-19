import { axiosClassic } from 'src/api/axios'
import type { IResponse } from 'src/types/global.types'
import type { IPost, IUniqPost } from 'src/types/post.types'

class PodcastService {
  private readonly BASE_URL = '/podcasts/'
  public async getAll(): Promise<IResponse<IPost>> {
    const { data } = await axiosClassic(this.BASE_URL)
    return data
  }
  public async getOne(
    id: number,
  ): Promise<{ posts: IUniqPost; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { posts: data, status }
  }
}
const podcastService = new PodcastService()
export default podcastService
