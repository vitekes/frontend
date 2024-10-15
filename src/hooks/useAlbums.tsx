import { useQuery } from '@tanstack/react-query'
import albumService from 'src/services/album.serivce'
import type { IAlbum } from 'src/types/album.types'
import type { IQueryLayout, IResponse } from 'src/types/global.types'

export default function useAlbums(
  initialData: IResponse<IAlbum>,
): IQueryLayout<IResponse<IAlbum>> {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ['albums'],
    queryFn: () => albumService.getAll(),
    initialData,
  })
  return { data, isLoading, isError, isFetching, error }
}