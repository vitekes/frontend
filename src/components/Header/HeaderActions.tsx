'use client'
import loop from 'assets/header/loop.svg'
import notification from 'assets/header/notification.svg'
import pencil from 'assets/header/pen.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useProfileTabs } from 'src/store/store'

export const HeaderActions = () => {
  const setTab = useProfileTabs(s => s.setTab)
  return (
    <section className='header__actions'>
      <Link href={`/posts/create`}>
        <button>
          <Image alt='Create post' src={pencil} width={20} height={20} />
        </button>
      </Link>
      <Link href={`/profile`}>
        <button onClick={() => setTab(5)}>
          <Image
            alt='Notifications'
            src={notification}
            width={20}
            height={20}
          />
        </button>
      </Link>
      <Link href={`/search`}>
        <button>
          <Image alt='Search' src={loop} width={20} height={20} />
        </button>
      </Link>
      <Link href={`/login`}>
        <button className='header__button-login'>Войти</button>
      </Link>
    </section>
  )
}
