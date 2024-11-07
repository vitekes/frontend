'use client'
import { useState } from 'react'
import './Blog.sass'

interface Props {
  isActive?: boolean
  str: string
}

export function Blog({ isActive, str }: Props) {
  const [active, setActive] = useState<boolean>(isActive ? isActive : false)

  return (
    <section className='profile__blog'>
      <input
        onClick={() => setActive(s => (s = !s))}
        type='checkbox'
        checked={active}
      />
      {str}
    </section>
  )
}
