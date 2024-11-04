export interface IGetNeedsSidebar {
  isMain?: boolean
  isProfile?: boolean
  isBlog?: boolean
  needSideBar?: boolean
}

export default function getNeedsSidebar(path: string): IGetNeedsSidebar {
  if (path === '/' || path.includes('/albums')) {
    return { isMain: true, needSideBar: true }
  } else if (path.includes('/blogs')) {
    return { isBlog: true, needSideBar: true }
  } else if (path.includes('/profile')) {
    return { isProfile: true, needSideBar: true }
  } else {
    return { needSideBar: false }
  }
}
