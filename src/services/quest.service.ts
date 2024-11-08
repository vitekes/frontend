import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { IResponse } from 'src/types/global.types'
import type { IQuest, IQuestUniq } from 'src/types/quest.types'

class QuestService {
  private readonly BASE_URL = '/quests'
  public async getAll(
    queryData = initialQueryParams.queryParams,
  ): Promise<IResponse<IQuest>> {
    const { data } = await axiosClassic.get<IResponse<IQuest>>(
      this.BASE_URL + '/',
      {
        params: queryData,
      },
    )

    return data
  }
  public async getOne(
    id: number,
  ): Promise<{ data: IQuestUniq; status: number }> {
    const { data, status } = await axiosClassic.get<IQuestUniq>(
      `${this.BASE_URL}/${id}`,
    )
    return { data, status }
  }
  public async getBest() {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/best_blogs`)
    return data
  }

  public async follow(id: number, type: 'follow' | 'unfollow') {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}/${type}`)
    return data
  }
}
const questService = new QuestService()
export default questService
