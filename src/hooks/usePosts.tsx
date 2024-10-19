import { useQuery } from '@tanstack/react-query'
import postService from 'src/services/post.service'
import type { IQueryLayout, IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'

export function usePosts(
  initialData: IResponse<IPost>,
): IQueryLayout<IResponse<IPost>> {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getAll(),
    initialData,
  })
  return { data, isLoading, isError, isFetching, error }
}
