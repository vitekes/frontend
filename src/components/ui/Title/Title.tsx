import type { PropsWithChildren } from 'react'
import './Title.sass'
interface Props extends PropsWithChildren {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, className, tag }: Props) {
  switch (tag) {
    case 'h1':
      return <h1 className={`title ${className && className}`}>{children}</h1>
    case 'h2':
      return <h2 className={`title ${className && className}`}>{children}</h2>
    case 'h3':
      return <h3 className={`title ${className && className}`}>{children}</h3>

    default:
      return <h2 className={`title ${className && className}`}>{children}</h2>
  }
}
