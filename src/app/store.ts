import { create } from 'zustand'

type TTabs = {
  tabActive: number
  setTab: (num: number) => void
}

export const useMainTabs = create<TTabs>((set) => ({
  tabActive: 0,
  setTab: (num: number) =>
    set(({ tabActive }) => {
      if (tabActive > 1 && tabActive < 0) return { tabActive: 1 }
      return { tabActive: num }
    }),
}))
export const useProfileTabs = create<TTabs>((set) => ({
  tabActive: 0,
  setTab: (num: number) =>
    set(({ tabActive }) => {
      if (tabActive > 3 && tabActive < 0) return { tabActive: 1 }
      return { tabActive: num }
    }),
}))
