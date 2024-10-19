interface IProfilePage {
  isMain: boolean
  isProfile: boolean
  needSideBar: boolean
}

export default function getProfilePage(path: string): IProfilePage {
  if (path === '/' || path.includes('/albums')) {
    return { isMain: true, isProfile: false, needSideBar: true }
  } else if (path.includes('/blogs/')) {
    return { isMain: false, isProfile: true, needSideBar: true }
  } else if (path.includes('/edit-page')) {
    return { isMain: false, isProfile: false, needSideBar: false }
  } else {
    return { isMain: false, isProfile: false, needSideBar: false }
  }
}
