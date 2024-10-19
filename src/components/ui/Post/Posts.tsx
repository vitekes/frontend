import { IPost } from 'src/types/post.types'
import { Post } from './Post'

interface Props {
  posts: IPost[]
}

export function Posts({ posts }: Props) {
  return (
    <section className='posts'>
      {posts.map(
        ({
          title,
          content,
          date,
          count_comments,
          count_likes,
          count_views,
          id,
          user: { username },
        }) => (
          <Post
            actions={{
              actionsInfo: {
                comments: count_comments,
                date: new Date(date),
                likes: count_likes,
                views: count_views,
              },
            }}
            author={username}
            categories={['categories']}
            tags={['tags']}
            text={content}
            title={title}
            key={id}
          />
        ),
      )}
    </section>
  )
}
