'use client'
import { usePathname } from 'next/navigation'
import getProfilePage from 'src/utils/getProfilePath'
import { UserMoreContent } from './UserMoreContent'

export function MoreContent() {
  const path = usePathname()
  const { isMain, isProfile } = getProfilePage(path)

  switch (true) {
    case isMain:
      return <></>
    case isProfile:
      return <UserMoreContent />
    default:
      return <></>
  }
}
