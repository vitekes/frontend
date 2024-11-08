'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useFilters } from 'src/hooks/useFilters'
import albumService from 'src/services/album.service'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'
const Pagination = dynamic(() => import('../Pagintaion/Pagination'))
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
