import { axiosClassic } from 'src/api/axios'
import { initialQueryParams } from 'src/constants/constants'
import type { IArrayRes } from 'src/types/global.types'
import type { ITest } from 'src/types/test.types'
import { Service } from './types'

class TestService implements Service<ITest> {
  private readonly BASE_URL = '/tests'

  public async getAll(queryData = initialQueryParams.queryParams) {
    const { data } = await axiosClassic<IArrayRes>(this.BASE_URL + '/', {
      params: queryData,
    })

    return data
  }
  public async getOne(id: number) {
    const { data, status } = await axiosClassic<ITest>(`${this.BASE_URL}/${id}`)
    return { data, status }
  }
}
const testService = new TestService()
export default testService
