import { axiosClassic } from 'src/api/axios'
import type { IContest } from 'src/types/contest.types'
import type { IResponse } from 'src/types/global.types'

class ContestService {
  private readonly BASE_URL = '/contests'
  public async getAll(): Promise<IResponse<IContest>> {
    const { data } = await axiosClassic.get<IResponse<IContest>>(
      this.BASE_URL + '/',
    )

    return data
  }
  public async getOne(id: number): Promise<{ data: IContest; status: number }> {
    const { data, status } = await axiosClassic.get(`${this.BASE_URL}/${id}`)
    return { data, status }
  }
}
const contestService = new ContestService()
export default contestService
