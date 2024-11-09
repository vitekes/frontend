import type { IArrayRes, IOneRes } from 'src/types/global.types'

// export interface Service<T> {
//   readonly BASE_URL: string

//   getAll(queryData?: TPagination): Promise<IArrayRes>

//   getOne(id: number): Promise<IOneRes<T>>
// }

export abstract class Service<T> {
  abstract getAll(queryData?: any): Promise<IArrayRes>

  abstract getOne(id: number): Promise<IOneRes<T>>
}
