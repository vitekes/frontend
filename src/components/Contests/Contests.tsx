'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useFilters } from 'src/hooks/useFilters'
import contestService from 'src/services/contest.service'
import type { IArrayRes } from 'src/types/global.types'
import { Heading } from 'ui/Heading/Heading'
import SkeletonLoader from 'ui/Skeleton/Skeleton'
import { Contest } from './Contest'
import './Contests.sass'

const Pagination = dynamic(() => import('../Pagintaion/Pagination'))

export function Contests({ initialData }: { initialData: IArrayRes }) {
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters()
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
        // @ts-ignore
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
