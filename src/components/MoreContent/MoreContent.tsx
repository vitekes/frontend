'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import useSidebars from 'src/utils/useSidebars'
const SaleMoreContent = dynamic(() => import('./SaleMoreContent'))
const UserMoreContent = dynamic(() =>
  import('./UserMoreContent').then(mod => mod.UserMoreContent),
)
export function MoreContent() {
  const path = usePathname()
  const { isBlog } = useSidebars(path)
  if (isBlog) {
    return <UserMoreContent />
  } else {
    return <SaleMoreContent />
  }
}
