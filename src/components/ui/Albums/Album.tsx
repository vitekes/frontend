import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { PLACEHOLDER_IMG } from 'src/constants/constants'
import type { IAlbum } from 'src/types/album.types'
import { Author } from '../Author/Author'
import { Title } from '../Title/Title'
import './Albums.sass'
const Actions = dynamic(() =>
  import('../Actions/Actions').then(mod => mod.Actions),
)
type Props = {
  needRoute?: boolean
  album: IAlbum
}
export const Album = ({
  album: {
    description,
    user: { first_name, last_name, avatar },
    title,
    id,
    count_comments,
    count_likes,
    count_views,
    date,
    preview,
  },
  needRoute,
}: Props) => {
  return (
    <article
      itemScope
      itemType='http://schema.org/Article'
      className={`album ${needRoute && 'album__route'}`}
    >
      <div itemProp='articleBody' className='album__info'>
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
        {/* {tags.length !== 0 && <Tags tags={tags} />} */}
        <p itemProp='description'>{description}</p>
        {/* </>
          ) : (
            <div className='need__sub'>Требуется подписка</div>
          )} */}
      </div>
      {/* {!isSub && ( */}
      <div className='album__img' itemProp='image'>
        <Image
          src={preview}
          width={730}
          height={800}
          sizes='(max-width: 1050px) 30vw, (max-width: 1500px) 50vw, 33vw'
          alt='Album photo'
          quality={needRoute ? 75 : 95}
          priority={needRoute ? (id < 3 ? true : false) : true}
          placeholder={'blur'}
          blurDataURL={PLACEHOLDER_IMG}
        />
      </div>
      <Link className='album__link' href={`/albums/${id}`}>
        link
      </Link>
      <Actions
        actionsInfo={{
          comments: count_comments,
          date,
          likes: count_likes,
          views: count_views,
        }}
      />
    </article>
  )
}
