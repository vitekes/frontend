import { type IPost, Post } from './Post'

interface Props {
  posts: IPost[]
}

export function Posts({ posts }: Props) {
  return (
    <section className='posts'>
      {posts.map(({ author, categories, tags, text, title }, index) => (
        <Post
          author={author}
          categories={categories}
          tags={tags}
          text={text}
          title={title}
          key={index}
        />
      ))}
    </section>
  )
}
