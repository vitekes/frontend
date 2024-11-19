export interface IGetNeedsSidebar {
  isMain?: boolean
  isProfile?: boolean
  isBlog?: boolean
  isNeedSideBar?: boolean
  isNewQuest?: boolean
  isSmall?: boolean
  isUniq?: boolean
  isNew?: boolean
}

export default function useSidebars(path: string): IGetNeedsSidebar {
  switch (true) {
    case path === '/' || path === '/albums':
      return { isMain: true, isNeedSideBar: true }
    case path === '/posts/add':
      return { isNew: true, isNeedSideBar: true }
    case path.includes('/blogs'):
      return { isBlog: true, isNeedSideBar: true }
    case path.includes('/profile'):
      return { isProfile: true, isSmall: true, isNeedSideBar: true }
    case path === '/quests/add':
      return { isNewQuest: true, isSmall: true, isNeedSideBar: true }
    case !!path.match(/\/\d+$/) || path === '/quests':
      return { isNeedSideBar: true, isUniq: true }
    default:
      return { isNeedSideBar: false }
  }
}
