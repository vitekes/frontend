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
    link: '/blog',
  },
  {
    name: 'Коллекция',
    link: '/collection',
  },
  {
    name: 'Конкурсы',
    link: '/events',
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
