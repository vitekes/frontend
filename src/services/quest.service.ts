import { axiosClassic } from 'src/api/axios'
import type { IResponse } from 'src/types/global.types'
import type { IQuest } from 'src/types/quest.types'

class QuestService {
  private readonly BASE_URL = '/quests'
  public async getAll(): Promise<IResponse<IQuest>> {
    const { data } = await axiosClassic.get<IResponse<IQuest>>(
      this.BASE_URL + '/',
    )
    return data
  }
  public async getOne(id: number): Promise<IQuest> {
    const { data } = await axiosClassic.get<IQuest>(`${this.BASE_URL}/${id}`)
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
}
const questService = new QuestService()
export default questService
