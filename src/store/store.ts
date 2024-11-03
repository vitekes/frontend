import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IStore, TTabs } from './store.types'

export const useMainTabs = create<TTabs>()(
  persist(
    set => ({
      tabActive: 0,
      setTab: (num: number) =>
        set(({ tabActive }) => {
          if (tabActive > 1 && tabActive < 0) return { tabActive: 1 }
          return { tabActive: num }
        }),
    }),
    {
      name: 'main-tabs',
    },
  ),
)
export const useProfileTabs = create<TTabs>()(
  persist(
    set => ({
      tabActive: 0,
      setTab: (num: number) =>
        set(({ tabActive }) => {
          if (tabActive > 3 && tabActive < 0) return { tabActive: 1 }
          return { tabActive: num }
        }),
    }),
    {
      name: 'profile-tabs',
    },
  ),
)
const initialQueryParams: Pick<IStore, 'queryParams'> = {
  queryParams: {
    page: 1,
    perPage: 9,
  },
}

export const useFiltersStore = create<IStore>(set => ({
  ...initialQueryParams,
  isFilterUpdated: false,

  updateQueryParam: ({ key, value }) =>
    set(state => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}))