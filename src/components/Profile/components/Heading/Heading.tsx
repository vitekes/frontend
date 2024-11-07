import './Heading.sass'

import type { PropsWithChildren } from 'react'

export const Heading = ({ children }: PropsWithChildren) => (
  <h1 className='profile__heading'>{children}</h1>
)
