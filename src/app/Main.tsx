'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import type { FC, ReactNode } from 'react'
import useSidebars from 'src/utils/useSidebars'
interface Props {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  const path = usePathname()
  const { isNeedSideBar: needSideBar, isSmall } = useSidebars(path)
  return (
    <main
      className={cn('main', {
        'main-with-sidebar': needSideBar,
        'main-without-sidebar': !needSideBar,
        'main-big': isSmall,
      })}
    >
      {children}
    </main>
  )
}
