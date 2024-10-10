'use client'
import { usePathname } from 'next/navigation'
import getProfilePage from 'src/utils/getProfilePath'

export function MoreContent() {
  const path = usePathname()
  const { isMain, isProfile } = getProfilePage(path)

  return isMain ? <></> : isProfile && <h1>Profile more contents</h1>
}
