import { axiosClassic } from 'src/api/axios'
import type { TNamespaces } from 'src/types/global.types'

class ViewsService {
  public async addView(type: TNamespaces, id: number): Promise<boolean> {
    const { data, status } = await axiosClassic.post<{ success: string }>(
      `${type}/${id}/view/add/`,
      {},
    )
    if (status === 200) {
      return true
    } else {
      return false
    }
  }
}

export default new ViewsService()
