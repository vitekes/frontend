'use client'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import getNeedsSidebar, {
  type IGetNeedsSidebar,
} from 'src/utils/getProfilePath'
import './Sidebar.sass'

const Sidebars = ({
  is: { isBlog, isMain, isProfile },
}: {
  is: IGetNeedsSidebar
}) => {
  switch (true) {
    case isBlog:
      const BlogSidebar = dynamic(() =>
        import('./pages/Blog.sidebar').then(mod => mod.BlogSidebar),
      )
      return <BlogSidebar />
    case isMain:
      const HomeSidebar = dynamic(() =>
        import('./pages/Home.sidebar').then(mod => mod.HomeSidebar),
      )
      return <HomeSidebar />
    case isProfile:
      const ProfileSidebar = dynamic(() => import('./pages/Profile.sidebar'))
      return <ProfileSidebar />

    default:
      return <></>
  }
}

export const Sidebar = () => {
  const path = usePathname()
  const { needSideBar, ...is } = getNeedsSidebar(path)
  if (!needSideBar) return <></>
  return (
    <aside className='sidebar'>
      <Sidebars is={is} />
    </aside>
  )
}
