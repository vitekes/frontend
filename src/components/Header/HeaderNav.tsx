'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface ILink {
  name: string
  link: string
}
const headerLinks: ILink[] = [
  {
    name: 'Лента',
    link: '/',
  },
  {
    name: 'Блог',
    link: '/blogs/1',
  },
  {
    name: 'Коллекция',
    link: '/collection',
  },
  {
    name: 'Конкурсы',
    link: '/contests',
  },
  {
    name: 'Квесты',
    link: '/quests',
  },
  {
    name: 'Альбомы',
    link: '/albums',
  },
]
export function HeaderNav() {
  // const { t } = useTranslation('header')
  // const headerLinks: ILink[] = [
  //   {
  //     name: t('nav.1'),
  //     link: '/',
  //   },
  //   {
  //     name: t('nav.2'),
  //     link: '/blog',
  //   },
  //   {
  //     name: t('nav.3'),
  //     link: '/collection',
  //   },
  //   {
  //     name: t('test'),
  //     link: '/events',
  //   },
  //   {
  //     name: t('nav.5'),
  //     link: '/quests',
  //   },
  //   {
  //     name: t('nav.6'),
  //     link: '/albums',
  //   },
  // ]
  const pathname = usePathname()
  return (
    <nav className='header__nav'>
      {headerLinks.map(({ link, name }, index) => (
        <Link
          key={index}
          href={link}
          className={pathname === link ? 'header__active' : ''}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
