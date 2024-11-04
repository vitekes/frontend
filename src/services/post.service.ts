import { axiosClassic } from 'src/api/axios'
import type { IResponse } from 'src/types/global.types'
import type { IPost, IUniqPost } from 'src/types/post.types'

class PostService {
  private readonly BASE_URL = '/posts'
  public async getAll(): Promise<IResponse<IPost>> {
    const { data } = await axiosClassic<IResponse<IPost>>(this.BASE_URL + '/')
    return data
  }
  public async getOne(
    id: number,
  ): Promise<{ posts: IUniqPost; status: number }> {
    const { data, status } = await axiosClassic<IUniqPost>(
      `${this.BASE_URL}/${id}`,
    )
    return { posts: data, status }
  }
  public async likePost(
    id: number,
  ): Promise<{ posts: IUniqPost; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { posts: data, status }
  }
}
const postService = new PostService()
export default postService
