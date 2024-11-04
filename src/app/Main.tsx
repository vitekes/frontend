'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import getNeedsSidebar from 'src/utils/getProfilePath'
interface Props {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  const path = usePathname()
  const { needSideBar } = getNeedsSidebar(path)
  return (
    <main
      className={cn('main', {
        'main-with-sidebar': needSideBar,
        'main-without-sidebar': !needSideBar,
      })}
    >
      {children}
    </main>
  )
}
