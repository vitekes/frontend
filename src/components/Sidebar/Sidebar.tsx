'use client'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar, {
  type IGetNeedsSidebar,
} from 'src/utils/getProfilePath'
import './Sidebar.sass'

const BlogSidebar = dynamic(() => import('./pages/Blog.sidebar'))
const HomeSidebar = dynamic(() => import('./pages/Home.sidebar'))
const ProfileSidebar = dynamic(() => import('./pages/Profile.sidebar'))
const UniqSidebar = dynamic(() => import('./pages/Uniq.sidebar'))

const Sidebars = ({
  is: { isBlog, isMain, isProfile, isUniq },
}: {
  is: IGetNeedsSidebar
}) => {
  switch (true) {
    case isBlog:
      // const { BlogSidebar } = await import('./pages/Blog.sidebar')
      return <BlogSidebar />
    case isMain:
      // const { HomeSidebar } = await import('./pages/Home.sidebar')

      return <HomeSidebar />
    case isProfile:
      // const ProfileSidebar = (await import('./pages/Profile.sidebar')).default
      return <ProfileSidebar />
    case isUniq:
      // const UniqSidebar = (await import('./pages/Uniq.sidebar')).default
      return <UniqSidebar />
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
