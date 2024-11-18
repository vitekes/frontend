'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useFilters } from 'src/hooks/useFilters'
import albumService from 'src/services/album.service'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'
import { Heading } from 'ui/Heading/Heading'
const Pagination = dynamic(() => import('src/components/Pagintaion/Pagination'))
export function AlbumsPage({
  initialData,
}: {
  initialData: IResponse<IAlbum>
}) {
  const { queryParams, isFilterUpdated, updateQueryParams } = useFilters()
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
