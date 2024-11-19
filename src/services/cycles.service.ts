import { axiosClassic } from 'src/api/axios'
import type { ICycle, ICycleForm } from 'src/types/cycles.types'
import type { IOneRes } from 'src/types/global.types'

class CyclesService {
  private readonly BASE_URL: string = '/cycles'

  public async getAll(): Promise<ICycle[]> {
    const { data } = await axiosClassic.get<ICycle[]>(this.BASE_URL + '/')
    return data
  }

  public async getOne(id: number): Promise<IOneRes<ICycle>> {
    const { data, status } = await axiosClassic.get<ICycle>(
      this.BASE_URL + `/${id}`,
    )
    return { data: { data }, status }
  }
  public async add(body: ICycleForm): Promise<ICycleForm> {
    const { data } = await axiosClassic.post<ICycleForm>(
      this.BASE_URL + `/create`,
      body,
    )
    return data
  }
}

export default new CyclesService()
