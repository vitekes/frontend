import { useQuery } from '@tanstack/react-query'
import { Posts } from 'src/components/ui/Post/Posts'
import postService from 'src/services/post.service'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'

export default function PostsTabs({
  initialData,
}: {
  initialData: IResponse<IPost>
}) {
  const { data, isLoading, isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getAll(),
    initialData,
  })
  return (
    <Posts
      isLoading={isLoading || isPending || isFetching || isRefetching}
      posts={data.array}
    />
  )
}
