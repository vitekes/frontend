import type { IGlobalLines } from 'src/types/global.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Post } from './Post'

interface Props {
  posts: IGlobalLines[]
  isLoading?: boolean
  isNeedRouting?: boolean
}

export function Posts({ posts, isLoading, isNeedRouting = false }: Props) {
  if (isLoading) return <SkeletonLoader />
  return (
    <section className='posts'>
      {posts.map(
        ({
          title,
          description,
          date,
          count_comments,
          count_likes,
          count_views,
          id,
          preview,
          user,
        }) => (
          <Post
            id={id}
            isNeedRouting={isNeedRouting}
            actions={{
              actionsInfo: {
                comments: count_comments,
                date: new Date(date),
                likes: count_likes,
                views: count_views,
              },
            }}
            user={user}
            categories={['categories']}
            tags={[{ title: 'tags', id: 1 }]}
            text={description}
            preview={preview}
            title={title}
            key={id}
          />
        ),
      )}
    </section>
  )
}
