import { axiosClassic } from 'src/api/axios'
import { initialQueryParams, IS_DEV } from 'src/constants/constants'
import type { IContest } from 'src/types/contest.types'
import type { IResponse, TPagination } from 'src/types/global.types'

class ContestService {
  private readonly BASE_URL: string = 'contests'

  public async getAll(
    queryData: TPagination = initialQueryParams.queryParams,
  ): Promise<IResponse<IContest>> {
    const { data } = await axiosClassic.get<IResponse<IContest>>(
      this.BASE_URL + '/',
      {
        params: queryData,
      },
    )
    return data
  }
  public getOne = async (id: number) => {
    try {
      const { data, status } = await axiosClassic.get<{ data: IContest }>(
        `${this.BASE_URL}/${id}`,
      )
      return { data, status }
    } catch (error) {
      const { redirect } = await import('next/navigation')
      IS_DEV && console.error(error)
      redirect('/404')
    }
  }
}

export default new ContestService()
