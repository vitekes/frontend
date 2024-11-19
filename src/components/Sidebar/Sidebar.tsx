'use client'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import useSidebars, { type IGetNeedsSidebar } from 'src/utils/useSidebars'
import './Sidebar.sass'
import NewQuestSidebar from './pages/NewQuestSidebar/NewQuest.sidebar'
const NewSidebar = dynamic(() => import('./pages/NewSidebar/New.sidebar'))
const UniqSidebar = dynamic(() => import('./pages/UniqSidebar/Uniq.sidebar'))
const ProfileSidebar = dynamic(
  () => import('./pages/ProfileSidebar/Profile.sidebar'),
)
const HomeSidebar = dynamic(() => import('./pages/HomeSidebar/Home.sidebar'))
const BlogSidebar = dynamic(() => import('./pages/BlogSidebar/Blog.sidebar'))

const Sidebars = ({
  is: { isBlog, isMain, isProfile, isUniq, isNew, isNewQuest },
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
    case isNewQuest:
      return <NewQuestSidebar />
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
  const is = useSidebars(path)
  if (!is.isNeedSideBar) return <></>
  return (
    <aside className={cn('sidebar', { sidebar__small: is.isSmall })}>
      <Sidebars is={is} />
    </aside>
  )
}
