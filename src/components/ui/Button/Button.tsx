import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.sass'

import cn from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'black' | 'accent' | 'grey'
  size?: 'bg' | 'md' | 'sm'
  isPagination?: boolean
}

export function Button({
  children,
  variant,
  size,
  isPagination = false,
  disabled,
  ...rest
}: Props) {
  const classes = {
    btn__pagination: isPagination,
    btn__black: variant === 'black',
    btn__accent: variant === 'accent',
    btn__grey: variant === 'grey',
    btn__medium: size === 'md',
    btn__small: size === 'sm',
    btn__big: size === 'bg',
    btn__disabled: disabled,
  }
  return (
    <button {...rest} className={cn('btn', classes)}>
      {children}
    </button>
  )
}
