import { axiosClassic } from 'src/api/axios'
import { initialQueryParams, IS_DEV } from 'src/constants/constants'
import type { IArrayRes, IOneRes, TPagination } from 'src/types/global.types'

export class Service<T> {
  public readonly BASE_URL: string

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

  // @ts-ignore
  public async getOne(id: number): Promise<IOneRes<T>> {
    try {
      const { data, status } = await axiosClassic.get<{ data: T }>(
        `${this.BASE_URL}/${id}`,
      )
      return { data, status }
    } catch (error) {
      IS_DEV && console.error(error)
      const { redirect } = await import('next/navigation')
      redirect('/404')
    }
  }
}
