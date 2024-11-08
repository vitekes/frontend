import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { IGlobalLines, IResponse } from 'src/types/global.types'
import type { IUniqPost } from 'src/types/post.types'

class SurveysService {
  private readonly BASE_URL = '/surveys'
  public async getAll(
    queryData = initialQueryParams.queryParams,
  ): Promise<IResponse<IGlobalLines>> {
    const { data } = await axiosClassic<IResponse<IGlobalLines>>(
      this.BASE_URL + '/',
      {
        params: queryData,
      },
    )
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
}
const surveysService = new SurveysService()
export default surveysService
