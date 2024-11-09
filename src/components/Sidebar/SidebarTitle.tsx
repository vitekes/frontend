import cn from 'clsx'
import type { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {
  isFirst?: boolean
}

const SidebarTitle = ({ children, isFirst = false }: IProps) => (
  <h2 className={cn('sidebar__title', { frst: isFirst })}>{children}</h2>
)
export default SidebarTitle
