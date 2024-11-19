import { axiosClassic } from 'src/api/axios'
import type { IPopular, IPost } from 'src/types/post.types'

export interface IAuthor {
  id: number
  username: string
  first_name: string
  last_name: string
  avatar: string | null
  views_day: number
  views_week: number
}

class Popular {
  public readonly BASE_URL: string

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl
  }
  public async getPopularPosts(): Promise<IPopular<IPost>> {
    const { data } = await axiosClassic.get<IPopular<IPost>>(
      `${this.BASE_URL}/preview_popular/`,
    )
    return data
  }
  public async getPopularAuthors(): Promise<IPopular<IAuthor>> {
    const { data } = await axiosClassic.get<IPopular<IAuthor>>(
      `${this.BASE_URL}/preview_popular_users/`,
    )
    return data
  }
}
class BlogService extends Popular {
  constructor() {
    super('/blogs')
  }
  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL + '/')
    return data
  }
  public async getOne(id: number) {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}`)
    return data
  }
  public async follow(id: number, type: 'follow' | 'unfollow') {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}/${type}`)
    return data
  }
}

export default new BlogService()
