'use client'

import { Posts } from 'ui/Post/Posts'
import './Main.sass'

import { useQuery } from '@tanstack/react-query'
import { useFilters } from 'src/hooks/useFilters'
import postService from 'src/services/post.service'
import type { IArrayRes } from 'src/types/global.types'
import Pagination from '../Pagintaion/Pagination'

export function Main({ initialData }: { initialData: IArrayRes }) {
  // const { tabActive, setTab } = useMainTabs(state => state)
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters()
  const {
    data: { array, length },
    isPending,
    isFetching,
    isRefetching,
  } = useQuery({
    queryKey: ['posts', queryParams],
    queryFn: () => postService.getAll(queryParams),
    initialData,
    enabled: isFilterUpdated,
  })
  return (
    <div className='main'>
      {/* <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Все подряд', 'Отслеживаемые']}
      /> */}
      {/* <QueryMiddleware filters={posts}> */}
      <Posts
        isLoading={isPending || isFetching || isRefetching}
        posts={array}
        isNeedRouting
      />
      <Pagination
        changePage={page => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page?.toString()}
        numberPages={length / +queryParams.perPage}
      />
      {/* </QueryMiddleware> */}
    </div>
  )
}
