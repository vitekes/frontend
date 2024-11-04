'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar from 'src/utils/getProfilePath'

export function MoreContent() {
  const path = usePathname()
  const { isBlog } = getNeedsSidebar(path)
  if (isBlog) {
    const UserMoreContent = dynamic(() =>
      import('./UserMoreContent').then(mod => mod.UserMoreContent),
    )
    return <UserMoreContent />
  } else {
    return <></>
  }
}
