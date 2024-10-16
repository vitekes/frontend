import squrle from 'assets/sqarle.png'
import Image from 'next/image'
import { IPost } from 'src/constants/constants'
import { Actions } from '../Actions/Actions'
import { Author } from '../Author/Author'
import { Tags } from '../Tag/Tags'
import { Title } from '../Title/Title'
import './Post.sass'

export function Post({ author, text, tags, title }: IPost) {
  return (
    <article className='post'>
      <div className='post__info'>
        <Author author={author} />
        <hr />
        <Title tag='h3'>{title}</Title>
        <section className='post__categories'>Категория</section>
        <Tags tags={tags} />
        <p>{text}</p>

        <Actions
          actionsInfo={{
            comments: 1342,
            date: new Date('2024-10-03T21:27:04.909468Z'),
            likes: 12412,
            views: 136136,
          }}
        />
      </div>
      <div className='post__images'>
        <div className='post__img'>
          <Image
            src={squrle}
            width={squrle.width}
            height={squrle.height}
            alt='Image'
          />
        </div>
      </div>
    </article>
  )
}
