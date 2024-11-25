'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { useContestsPagination } from 'src/hooks/usePagintaion'
import contestService from 'src/services/contest.service'
import type { IContest } from 'src/types/contest.types'
import type { IResponse } from 'src/types/global.types'
import { Heading } from 'ui/Heading/Heading'
import SkeletonLoader from 'ui/Skeleton/Skeleton'
import { Contest } from './[id]/Contest'
import './Contests.sass'

const Pagination = dynamic(() => import('src/components/Pagintaion/Pagination'))

export const Contests: FC<{
  initialData: IResponse<IContest>
}> = ({ initialData }) => {
  const { queryParams, isFilterUpdated, updateQueryParams } =
    useContestsPagination()
  const { data, isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['contests', queryParams],
    queryFn: () => contestService.getAll(queryParams),
    initialData,
    enabled: isFilterUpdated,
  })
  if (isPending || isFetching || isRefetching) return <SkeletonLoader />
  return (
    <div className='contests'>
      <Heading>Конкурсы</Heading>
      {data.array.map(contest => (
        <Contest key={contest.id} data={contest} />
      ))}
      <Pagination
        changePage={page => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page?.toString()}
        numberPages={data.length / +queryParams.perPage}
      />
    </div>
  )
}
