'use client'
import { useQuery } from '@tanstack/react-query'
import postService from 'src/services/post.service'
import type { TOnePost } from 'src/types/post.types'
import { Comments } from '../ui/Comments/Comments'
import { Post } from '../ui/Post/Post'
import SkeletonLoader from '../ui/Skeleton/Skeleton'
import './Post.sass'
export function PostPage({ initialData }: { initialData: TOnePost }) {
  const { data, isFetching, isPending, isRefetching } = useQuery({
    queryKey: ['post', initialData.data.data.id],
    queryFn: () => postService.getOne(initialData.data.data.id),
    initialData,
  })

  if (isFetching || isPending || isRefetching) return <SkeletonLoader isAlone />
  return (
    <div>
      <Post post={data.data.data} isNeedRouting={false} />
      <Comments namespace='posts' id={data.data.data.id} />
    </div>
  )
}
