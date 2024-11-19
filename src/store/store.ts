import { initialQueryParams } from 'src/constants/constants'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IStore, TSale, TTabs } from './store.types'

// export const useMainTabs = create<TTabs>()(
//   persist(
//     set => ({
//       tabActive: 0,
//       setTab: (num: number) =>
//         set(({ tabActive }) => {
//           if (tabActive > 1 && tabActive < 0) return { tabActive: 1 }
//           return { tabActive: num }
//         }),
//     }),
//     {
//       name: 'main-tabs',
//     },
//   ),
// )
export const useProfileTabs = create<TTabs>()(
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
      name: 'profile-tabs',
    },
  ),
)
export const useNewQuestsTabs = create<TTabs>()(
  persist(
    set => ({
      tabActive: 0,
      setTab: (num: number) =>
        set(({ tabActive }) => {
          if (tabActive > 5 && tabActive < 0) return { tabActive: 1 }
          return { tabActive: num }
        }),
    }),
    {
      name: 'new-quests-tabs',
    },
  ),
)
export const useBlogTabs = create<TTabs>()(
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
      name: 'blog-tabs',
    },
  ),
)
export const useSaleClose = create<TSale>()(
  persist(
    set => ({
      isOpen: true,
      close: () => set(() => ({ isOpen: false })),
    }),
    {
      name: 'is-sale-close',
    },
  ),
)
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
