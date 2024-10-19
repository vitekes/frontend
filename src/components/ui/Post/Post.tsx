import squrle from 'assets/sqarle.png'
import Image from 'next/image'

import { IPostProps, TActionsProps } from 'src/types/props.types'
import { Actions } from '../Actions/Actions'
import { Author } from '../Author/Author'
import { Tags } from '../Tag/Tags'
import { Title } from '../Title/Title'
import './Post.sass'

type TProps = {
  actions: TActionsProps
} & IPostProps

export function Post({
  author,
  text,
  tags,
  title,
  actions: { actionsInfo },
}: TProps) {
  return (
    <article className='post'>
      <div className='post__info'>
        <Author author={author} />
        <hr />
        <Title tag='h3'>{title}</Title>
        <section className='post__categories'>Категория</section>
        <Tags tags={tags} />
        <p>
          {text.slice(0, 250)}
          {text.length > 250 && '...'}
        </p>

        <Actions actionsInfo={actionsInfo} />
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
