import { axiosClassic } from 'src/api/axios'
import { initialQueryParams, IS_DEV } from 'src/constants/constants'
import type { TPagination } from 'src/types/global.types'
import type { IUniqPost, TOnePost, TPostArray } from 'src/types/post.types'

class PostService {
  private readonly BASE_URL = '/posts'
  // @ts-ignore
  public getOne = async (id: number): Promise<TOnePost> => {
    try {
      const { data, status } = await axiosClassic.get<{ data: IUniqPost }>(
        `${this.BASE_URL}/${id}`,
      )
      return { data, status }
    } catch (error) {
      IS_DEV && console.error(error)
      const { redirect } = await import('next/navigation')
      redirect('/404')
    }
  }
  public getAll = async (
    queryData: TPagination = initialQueryParams.queryParams,
  ): Promise<TPostArray> => {
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
