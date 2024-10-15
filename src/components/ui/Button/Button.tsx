import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.sass'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isCircle?: boolean
}

export function Button({
  children,
  // variant = 'primary',
  // isCircle,
  ...rest
}: Props) {
  return (
    <button
      // className={cn(
      // 	styles.button,
      // 	styles[variant],
      // 	{
      // 		[styles.circle]: isCircle,
      // 	},
      // 	className
      // )}
      {...rest}
      className='btn'
    >
      {children}
    </button>
  )
}
