import { initialQueryParams } from 'src/constants/constants'
import { create } from 'zustand'
import type { IStore } from './store.types'

export const usePostsPaginationStore = create<IStore>(set => ({
  ...initialQueryParams,
  isFilterUpdated: false,

  updateQueryParam: ({ key, value }) =>
    set(state => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}))
export const useAlbumsPaginationStore = create<IStore>(set => ({
  ...initialQueryParams,
  isFilterUpdated: false,

  updateQueryParam: ({ key, value }) =>
    set(state => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}))
export const useContestPaginationStore = create<IStore>(set => ({
  ...initialQueryParams,
  isFilterUpdated: false,

  updateQueryParam: ({ key, value }) =>
    set(state => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}))
export const useQuestsPaginationStore = create<IStore>(set => ({
  ...initialQueryParams,
  isFilterUpdated: false,

  updateQueryParam: ({ key, value }) =>
    set(state => ({
      queryParams: { ...state.queryParams, [key]: value },
      isFilterUpdated: true,
    })),

  reset: () => set(() => ({ ...initialQueryParams, isFilterUpdated: true })),
}))
