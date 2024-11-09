import { axiosClassic } from 'src/api/axios'
import type { IQuestUniq } from 'src/types/quest.types'
import { Service } from './types'

class QuestService extends Service<IQuestUniq> {
  constructor() {
    super('/quests')
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

export default new QuestService()
