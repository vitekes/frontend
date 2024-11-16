import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { TPagination } from 'src/types/global.types'
import type { IUniqPost, TOnePost, TPostArray } from 'src/types/post.types'

class PostService {
  private readonly BASE_URL = '/posts'
  public async getOne(id: number): Promise<TOnePost> {
    const { data, status } = await axiosClassic.get<{ data: IUniqPost }>(
      `${this.BASE_URL}/${id}`,
    )
    return { data, status }
  }
  public async getAll(
    queryData: TPagination = initialQueryParams.queryParams,
  ): Promise<TPostArray> {
    const { data } = await axiosClassic.get<TPostArray>(this.BASE_URL + '/', {
      params: queryData,
    })
    return data
  }
  public async likePost(
    id: number,
  ): Promise<{ posts: IUniqPost; status: number }> {
    const { data, status } = await axiosClassic(`${this.BASE_URL}/${id}`)
    return { posts: data, status }
  }
}

export default new PostService()
