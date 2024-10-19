import Link from 'next/link'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  link: string
  need: boolean | undefined
}

export function NeedRoute({ children, link, need }: Props) {
  if (need) {
    return (
      <Link href={link} className='link'>
        {children}
      </Link>
    )
  } else {
    return children
  }
}
