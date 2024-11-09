import Image from 'next/image'

import type { IPostProps, TActionsProps } from 'src/types/props.types'
import slicerTxt from 'src/utils/slicer.util'
import { Actions } from '../Actions/Actions'
import { Author } from '../Author/Author'
import { NeedRoute } from '../needRoute'
import { Tags } from '../Tag/Tags'
import { Title } from '../Title/Title'
import './Post.sass'

type TProps = {
  actions: TActionsProps
  isNeedRouting?: boolean
} & IPostProps

export function Post({
  text,
  tags,
  title,
  preview,
  isNeedRouting,
  id,
  user: { avatar, first_name, last_name },
  actions: { actionsInfo },
}: TProps) {
  return (
    <NeedRoute need={isNeedRouting} link={`/posts/${id}`}>
      <article className='post'>
        <div className='post__info'>
          <div className='post__container'>
            <Author author={`${first_name} ${last_name}`} avatar={avatar} />
            <hr />
            <Title tag='h3'>{title}</Title>
            <section className='post__categories'>Категория</section>
            <Tags tags={tags} />
            <p>{slicerTxt(text)}</p>
          </div>

          <Actions actionsInfo={actionsInfo} />
        </div>

        {preview && (
          <div className='post__img'>
            <Image src={preview} width={250} height={500} alt='Image' />
          </div>
        )}
      </article>
    </NeedRoute>
  )
}
