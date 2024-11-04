'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar from 'src/utils/getProfilePath'
import './Sidebar.sass'
const HomeSidebar = dynamic(() =>
  import('./pages/HomeSidebar').then(mod => mod.HomeSidebar),
)
const ProfileSidebar = dynamic(() =>
  import('./pages/ProfileSidebar').then(mod => mod.ProfileSidebar),
)

export function Sidebar() {
  const path = usePathname()
  const { isMain, isProfile, needSideBar } = getNeedsSidebar(path)
  if (!needSideBar) return <></>
  return (
    <aside className='sidebar'>
      {isMain ? <HomeSidebar /> : isProfile && <ProfileSidebar />}
    </aside>
  )
}
