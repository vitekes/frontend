'use client'
import { useQuery } from '@tanstack/react-query'
import postService from 'src/services/post.service'
import type { IOneRes } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'
import SkeletonLoader from '../ui/Skeleton/Skeleton'
import './Post.sass'
export function PostPage({
  initialData,
}: {
  initialData: IOneRes<{ data: IPost }>
}) {
  const { data, isFetching, isPending, isRefetching } = useQuery({
    queryKey: ['post', initialData.data.data.id],
    queryFn: () => postService.getOne(initialData.data.data.id),
    initialData,
  })
  console.log(data.data.data)
  if (isFetching || isPending || isRefetching) return <SkeletonLoader isAlone />
  return <></>
  // return (
  //   <Post
  //     id={id}
  //     actions={{
  //       actionsInfo: {
  //         comments: count_comments,
  //         date: new Date(date),
  //         likes: count_likes,
  //         views: count_views,
  //       },
  //     }}
  //     user={user}
  //     categories={['categories']}
  //     tags={[{ title: 'tags', id: 1 }]}
  //     text={content}
  //     preview={preview}
  //     title={title}
  //     key={id}
  //   />
  // )
}
