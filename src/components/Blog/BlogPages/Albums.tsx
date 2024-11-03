import { useQuery } from '@tanstack/react-query'
import { Loader } from 'src/components/Loader/Loader'
import { Albums } from 'src/components/ui/Albums/Albums'
import albumService from 'src/services/album.service'

export function AlbumsTabs() {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ['albums user', 1],
    queryFn: () => albumService.getAll(),
  })
  const loaders = isLoading || isPending
  return loaders ? <Loader /> : data && <Albums albums={data?.results} />
}
