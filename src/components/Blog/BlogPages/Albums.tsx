import { useQuery } from '@tanstack/react-query'
import { Albums } from 'src/components/ui/Albums/Albums'
import albumService from 'src/services/album.service'

export function AlbumsTabs() {
  const { data, isLoading, isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['albums'],
    queryFn: () => albumService.getAll(),
  })

  return (
    data && (
      <Albums
        isLoading={isLoading || isPending || isFetching || isRefetching}
        albums={data.array}
      />
    )
  )
}
