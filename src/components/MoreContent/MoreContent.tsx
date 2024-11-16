'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar from 'src/utils/getProfilePath'
const SaleMoreContent = dynamic(() => import('./SaleMoreContent'))
const UserMoreContent = dynamic(() =>
  import('./UserMoreContent').then(mod => mod.UserMoreContent),
)
export function MoreContent() {
  const path = usePathname()
  const { isBlog } = getNeedsSidebar(path)
  if (isBlog) {
    return <UserMoreContent />
  } else {
    return <SaleMoreContent />
  }
}
