import { create } from 'zustand'
import { persist } from 'zustand/middleware'
type TTabs = {
  tabActive: number
  //eslint-disable-next-line
  setTab: (num: number) => void
}

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
