import Image from 'next/image'

import { PLACEHOLDER_IMG } from 'src/constants/constants'
import type { IPost } from 'src/types/post.types'
import slicerTxt from 'src/utils/slicer.util'
import { Actions } from '../Actions/Actions'
import { Author } from '../Author/Author'
import { Title } from '../Title/Title'
import './Post.sass'

type TProps = {
  isNeedRouting?: boolean
  post: IPost
}

export const Post = ({
  post: {
    id,
    title,
    content,
    preview,
    user: { avatar, first_name, last_name },
    count_comments,
    count_likes,
    count_views,
    date,
  },
  isNeedRouting,
}: TProps) => {
  return (
    <article className='post' itemScope itemType='http://schema.org/Article'>
      <div className='post__info'>
        <div className='post__container' itemProp='articleBody'>
          <Author author={`${first_name} ${last_name}`} avatar={avatar} />
          <hr />
          <Title tag='h3'>{title}</Title>
          <section className='post__categories'>Категория</section>
          {/* <Tags tags={tags} /> */}
          <p itemProp='description'>{slicerTxt(content)}</p>
        </div>

        <Actions
          actionsInfo={{
            comments: count_comments,
            likes: count_likes,
            views: count_views,
            date,
          }}
        />
      </div>

      {preview && (
        <div className='post__img' itemProp='image'>
          <Image
            src={preview}
            width={250}
            height={500}
            sizes='(max-width: 1050px) 30vw, (max-width: 1500px) 50vw, 33vw'
            alt='Post photo'
            quality={isNeedRouting ? 75 : 95}
            priority={id < 3 ? true : false}
            placeholder={'blur'}
            blurDataURL={PLACEHOLDER_IMG}
            onError={() => <>Error</>}
          />
        </div>
      )}
    </article>
  )
}
