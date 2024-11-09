import './Heading.sass'

import type { HTMLAttributes, ReactNode } from 'react'
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}
export const Heading = ({ children, ...rest }: Props) => (
  <h1 className='heading' {...rest}>
    {children}
  </h1>
)
