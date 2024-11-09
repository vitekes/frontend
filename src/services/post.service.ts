import { axiosClassic } from 'src/api/axios'
import type { IPost, IUniqPost } from 'src/types/post.types'
import { Service } from './types'

class PostService extends Service<IPost> {
  constructor() {
    super('/posts')
  }

  public async likePost(
    id: number,
  ): Promise<{ posts: IUniqPost; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { posts: data, status }
  }
}

export default new PostService()
