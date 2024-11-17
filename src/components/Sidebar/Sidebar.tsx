'use client'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar, {
  type IGetNeedsSidebar,
} from 'src/utils/getProfilePath'
import './Sidebar.sass'
const NewSidebar = dynamic(() => import('./pages/New.sidebar'))
const BlogSidebar = dynamic(() => import('./pages/Blog.sidebar'))
const HomeSidebar = dynamic(() => import('./pages/Home.sidebar'))
const ProfileSidebar = dynamic(() => import('./pages/Profile.sidebar'))
const UniqSidebar = dynamic(() => import('./pages/Uniq.sidebar'))

const Sidebars = ({
  is: { isBlog, isMain, isProfile, isUniq, isNew },
}: {
  is: IGetNeedsSidebar
}) => {
  switch (true) {
    case isBlog:
      return <BlogSidebar />
    case isMain:
      return <HomeSidebar />
    case isProfile:
      return <ProfileSidebar />
    case isUniq:
      return <UniqSidebar />
    case isNew:
      return <NewSidebar />
    default:
      return <h1>Ошибка! Не прокинут Sidebar</h1>
  }
}

export const Sidebar = () => {
  const path = usePathname()
  const is = getNeedsSidebar(path)
  if (!is.isNeedSideBar) return <></>
  return (
    <aside className={cn('sidebar', { sidebar__profile: is.isProfile })}>
      <Sidebars is={is} />
    </aside>
  )
}
