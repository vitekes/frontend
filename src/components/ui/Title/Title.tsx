import cn from 'clsx'
import type { PropsWithChildren } from 'react'
import './Title.sass'

interface Props extends PropsWithChildren {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, className, tag = 'h2' }: Props) {
  const Tag = tag

  return (
    <Tag id='title' itemProp='headline' className={cn('title', className)}>
      {children}
    </Tag>
  )
}
