import type { TPagination } from 'src/types/global.types'
export type TTabs = {
  tabActive: number
  //eslint-disable-next-line
  setTab: (num: number) => void
}

export interface IStore {
  queryParams: TPagination
  isFilterUpdated: boolean
  // eslint-disable-next-line
  updateQueryParam: (data: { key: keyof TPagination; value: string }) => void
  reset: () => void
}
