'use client'
import { usePathname } from 'next/navigation'
import getProfilePage from 'src/utils/getProfilePath'
import './Sidebar.sass'
import { HomeSidebar } from './pages/HomeSidebar'
import { ProfileSidebar } from './pages/ProfileSidebar'

export function Sidebar() {
  const path = usePathname()
  const { isMain, isProfile, needSideBar } = getProfilePage(path)
  if (!needSideBar) return <></>
  return (
    <aside className='sidebar'>
      {isMain ? <HomeSidebar /> : isProfile && <ProfileSidebar />}
    </aside>
  )
}
