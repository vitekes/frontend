import { axiosClassic } from 'src/api/axios'
import type { IPopularPosts } from 'src/types/post.types'

class BlogService {
  private readonly BASE_URL = '/blogs'
  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL + '/')
    return data
  }
  public async getOne(id: number) {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}`)
    return data
  }
  public async getBest() {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/best_blogs`)
    return data
  }

  public async follow(id: number, type: 'follow' | 'unfollow') {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}/${type}`)
    return data
  }
  public async getPopular(): Promise<IPopularPosts> {
    const { data } = await axiosClassic.get<IPopularPosts>(
      `${this.BASE_URL}/preview_popular/`,
    )
    return data
  }
}

export default new BlogService()
