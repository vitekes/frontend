import cn from 'clsx'
import type { FC } from 'react'
import { initialQueryParams } from 'src/constants/constants'
import './Skeleton.sass'
type TProps = {
  isAlone?: boolean
  count?: number
}
const SkeletonLoader: FC<TProps> = ({ count, isAlone = false }) => (
  <div className='skeleton'>
    {Array.from({
      length: isAlone
        ? 1
        : count
          ? count
          : +initialQueryParams.queryParams.perPage,
    }).map((_, index) => (
      <div
        key={index}
        className={cn('skeleton__in', {
          skeleton__alone: isAlone,
          skeleton__plenty: !isAlone,
        })}
      >
        <div className='skeleton__in__in'></div>
      </div>
    ))}
  </div>
)

export default SkeletonLoader
