'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useAlbumsPagination } from 'src/hooks/usePagintaion'
import albumService from 'src/services/album.service'

import type { IGlobalLines, IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'
import { Heading } from 'ui/Heading/Heading'
const Pagination = dynamic(() => import('src/components/Pagintaion/Pagination'))
export function AlbumsPage({
  initialData,
}: {
  initialData: IResponse<IGlobalLines>
}) {
  const { queryParams, isFilterUpdated, updateQueryParams } =
    useAlbumsPagination()
  const { data, isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['albums', queryParams],
    queryFn: () => albumService.getAll(queryParams),
    initialData,
    enabled: isFilterUpdated,
  })
  return (
    <div>
      <Heading style={{ marginBottom: 15 }}>Альбомы</Heading>

      <Albums
        albums={data.array}
        isLoading={isPending || isFetching || isRefetching}
      />
      <Pagination
        changePage={page => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page?.toString()}
        numberPages={data.length / +queryParams.perPage}
      />
    </div>
  )
}
