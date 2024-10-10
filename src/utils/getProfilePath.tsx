interface IProfilePage {
  isMain: boolean
  isProfile: boolean
}

export default function getProfilePage(path: string): IProfilePage {
  if (path === '/') return { isMain: true, isProfile: false }
  if (path.includes('/blogs/')) return { isMain: false, isProfile: true }
  return { isMain: false, isProfile: false }
}
