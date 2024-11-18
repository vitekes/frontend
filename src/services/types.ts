import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { IArrayRes, IOneRes, TPagination } from 'src/types/global.types'

export class Service<T> {
  readonly BASE_URL: string

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl
  }

  public async getAll(
    queryData: TPagination = initialQueryParams.queryParams,
  ): Promise<IArrayRes> {
    const { data } = await axiosClassic.get<IArrayRes>(this.BASE_URL + '/', {
      params: queryData,
    })
    return data
  }
  public async getOne(id: number): Promise<IOneRes<T>> {
    const data = await axiosClassic.get<{ data: T }>(`${this.BASE_URL}/${id}`)
    return data
  }
}
