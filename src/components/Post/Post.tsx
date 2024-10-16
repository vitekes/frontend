import mars from 'assets/mars.png'
import Image from 'next/image'
import type { IUniqPost } from 'src/types/post.types'
import { Actions } from 'ui/Actions/Actions'
import { Author } from 'ui/Author/Author'
import { Tags } from 'ui/Tag/Tags'
import { Title } from 'ui/Title/Title'
import './Post.sass'
export function Post({
  post: {
    title,
    tags,
    content,
    date,
    count_comments: comments,
    count_likes: likes,
    count_views: views,
  },
}: {
  post: IUniqPost
}) {
  return (
    <div className='postu'>
      <Title>{title}</Title>
      <Author author='Test User' />
      <Tags tags={tags} />
      <Image
        alt='Photo'
        src={mars}
        className='postu__img'
        width={1920}
        height={315}
      />
      <p>{content}</p>
      <Actions actionsInfo={{ comments, date, likes, views }} />
    </div>
  )
}
