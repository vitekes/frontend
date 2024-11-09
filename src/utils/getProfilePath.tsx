export interface IGetNeedsSidebar {
  isMain?: boolean
  isProfile?: boolean
  isBlog?: boolean
  isNeedSideBar?: boolean
  isUniq?: boolean
}

export default function getNeedsSidebar(path: string): IGetNeedsSidebar {
  switch (true) {
    case path === '/' || path === '/albums':
      return { isMain: true, isNeedSideBar: true }
    case path.includes('/blogs'):
      return { isBlog: true, isNeedSideBar: true }
    case path.includes('/profile'):
      return { isProfile: true, isNeedSideBar: true }
    case !!path.match(/\/\d+$/) || path === '/quests':
      return { isNeedSideBar: true, isUniq: true }
    default:
      return { isNeedSideBar: false }
  }
}
