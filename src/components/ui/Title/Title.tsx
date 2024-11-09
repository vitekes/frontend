import cn from 'clsx'
import type { PropsWithChildren } from 'react'
import './Title.sass'

interface Props extends PropsWithChildren {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, className, tag }: Props) {
  const cls = cn('title', { className: !!className })
  switch (tag) {
    case 'h1':
      return <h1 className={cls}>{children}</h1>
    case 'h2':
      return <h2 className={cls}>{children}</h2>
    case 'h3':
      return <h3 className={cls}>{children}</h3>
    case 'h4':
      return <h4 className={cls}>{children}</h4>

    default:
      return <h2 className={cls}>{children}</h2>
  }
}
