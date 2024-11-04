import cn from 'clsx'
import { useProfileTabs } from 'src/store/store'
const links: string[] = [
  'Моя страница',
  'Мои блоги',
  'Кошелёк',
  'Подписки',
  'Приватность',
  'Уведомления',
]
const ProfileSidebar = () => {
  const { setTab, tabActive } = useProfileTabs(state => state)

  return (
    <nav className='sidebar__nav'>
      {links.map((str, i) => (
        <span
          className={cn({ 'sidebar__nav-active': tabActive === i })}
          onClick={() => setTab(i)}
          key={i}
        >
          {str}
        </span>
      ))}
    </nav>
  )
}
export default ProfileSidebar
