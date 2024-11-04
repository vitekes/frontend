interface IGetNeedsSidebar {
  isMain?: boolean
  isProfile?: boolean
  needSideBar?: boolean
}

export default function getNeedsSidebar(path: string): IGetNeedsSidebar {
  if (path === '/' || path.includes('/albums')) {
    return { isMain: true, needSideBar: true }
  } else if (path.includes('/blogs/')) {
    return { isProfile: true, needSideBar: true }
  } else if (
    path.includes('/edit-page') ||
    path.includes('/login') ||
    path.includes('/register')
  ) {
    return {}
  } else {
    return {}
  }
}
