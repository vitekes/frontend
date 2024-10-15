import type { IUniqPost } from 'src/types/post.types'
import { Title } from 'ui/Title/Title'
import './Post.sass'
export function Post({ post: { title } }: { post: IUniqPost }) {
  return (
    <div className='postu'>
      <Title>{title}</Title>
    </div>
  )
}
