import type { IPost } from 'src/types/post.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Post } from './Post'

interface Props {
  posts: IPost[]
  isLoading?: boolean
  isNeedRouting?: boolean
}

export function Posts({ posts, isLoading, isNeedRouting = false }: Props) {
  if (isLoading) return <SkeletonLoader />
  return (
    <section className='posts'>
      {posts.map(post => (
        <Post post={post} isNeedRouting={isNeedRouting} key={post.id} />
      ))}
    </section>
  )
}
