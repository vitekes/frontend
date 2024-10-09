import { create } from 'zustand'

type Tabs = {
  tabActive: number
  setTab: (num: number) => void
}

export const useTabs = create<Tabs>((set) => ({
  tabActive: 0,
  setTab: (num: number) =>
    set(({ tabActive }) => {
      if (tabActive > 1 && tabActive < 0) return { tabActive: 1 }
      return { tabActive: num }
    }),
}))
