import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { IAlbumProps } from 'src/types/props.types'
import { Author } from '../Author/Author'
import { NeedRoute } from '../needRoute'
import { Tags } from '../Tag/Tags'
import { Title } from '../Title/Title'
import './Albums.sass'
const Actions = dynamic(() =>
  import('../Actions/Actions').then(mod => mod.Actions),
)
type Props = {
  needRoute?: boolean
  id: number
} & IAlbumProps
export const Album = ({
  text,
  tags,
  user: { last_name, first_name, avatar },
  title,
  images,
  id,
  needRoute,
  actions: { actionsInfo },
}: Props) => {
  return (
    <NeedRoute link={`/albums/${id}`} need={needRoute}>
      <article className={`album ${needRoute && 'album__route'}`}>
        <div className='album__info'>
          <Author author={`${first_name} ${last_name}`} avatar={avatar} />

          <hr />
          <Title tag='h3'>{title}</Title>
          {/* <section className='album__categories'>
            {categories.map((str, index) => (
              <span key={index}>{str}</span>
            ))}
          </section> */}
          {/* {!isSub ? (
            <> */}
          {tags.length !== 0 && <Tags tags={tags} />}
          <p>{text}</p>
          {/* </>
          ) : (
            <div className='need__sub'>Требуется подписка</div>
          )} */}
        </div>
        {/* {!isSub && ( */}
        <div className='album__img'>
          <Image
            src={images}
            width={730}
            height={800}
            alt='Album photo'
            quality={needRoute ? 75 : 95}
            priority={id < 3 ? true : false}
          />
        </div>

        <Actions actionsInfo={actionsInfo} />
      </article>
    </NeedRoute>
  )
}
