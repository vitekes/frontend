import type { FC } from 'react'
import { initialQueryParams } from 'src/constants/constants'
import './Skeleton.sass'

const SkeletonLoader: FC = () => {
  return (
    <div className='skeleton'>
      {Array.from({ length: +initialQueryParams.queryParams.perPage }).map(
        (_, index) => (
          <div key={index} className='skeleton__in'>
            <div className='skeleton__in__in'></div>
          </div>
        ),
      )}
    </div>
  )
}

export default SkeletonLoader
