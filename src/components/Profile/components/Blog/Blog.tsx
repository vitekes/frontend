'use client'
import cn from 'clsx'
import { useState } from 'react'
import './Blog.sass'

interface Props {
  isActive?: boolean
  str: string
}

export function Blog({ isActive, str }: Props) {
  const [active, setActive] = useState<boolean>(isActive ? isActive : false)

  return (
    <section
      onClick={() => setActive(s => (s = !s))}
      className={cn('profile__blog', { 'profile__blog-active': active })}
    >
      <input
        onClick={() => setActive(s => (s = !s))}
        type='checkbox'
        checked={active}
      />
      {str}
    </section>
  )
}
