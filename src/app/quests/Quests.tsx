'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import Quest from 'src/components/Quests/Quest'
import SkeletonLoader from 'src/components/ui/Skeleton/Skeleton'
import { useFilters } from 'src/hooks/useFilters'
import questService from 'src/services/quest.service'
import type { IArrayRes } from 'src/types/global.types'
const Pagination = dynamic(() => import('src/components/Pagintaion/Pagination'))

const Quests = ({ quests }: { quests: IArrayRes }) => {
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters()
  const {
    data: { array, length },
    isPending,
    isFetching,
    isRefetching,
  } = useQuery({
    queryKey: ['quests', queryParams],
    queryFn: () => questService.getAll(queryParams),
    initialData: quests,
    enabled: isFilterUpdated,
  })
  const loaders = isPending || isFetching || isRefetching
  return (
    <div>
      <div className='quests'>
        {loaders ? (
          <SkeletonLoader />
        ) : (
          array.map(quest => <Quest quest={quest} key={quest.id} />)
        )}
      </div>

      <Pagination
        changePage={page => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page?.toString()}
        numberPages={length / +queryParams.perPage}
      />
    </div>
  )
}
export default Quests
