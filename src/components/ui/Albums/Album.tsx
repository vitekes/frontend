import avatar from 'assets/fake__avatar.png'

import Image from 'next/image'
import { Actions } from '../Actions/Actions'

import type { IAlbum } from 'src/constants/constants'
import { Tags } from '../Tag/Tags'
import { Title } from '../Title/Title'
export function Album({
  author,
  categories,
  text,
  tags,
  title,
  images,
  isSub,
  actions: { actionsInfo },
}: IAlbum) {
  return (
    <article className='album'>
      <div className='album__info'>
        <div className='album__authors'>
          <Image alt='Author Name' width={40} height={40} src={avatar} />
          {author}
        </div>
        <hr />
        <Title tag='h3'>{title}</Title>
        <section className='album__categories'>
          {categories.map((str, index) => (
            <>
              <span key={index}>{str}</span>
              {index === 0 ? '/' : ''}
            </>
          ))}
        </section>
        {!isSub ? (
          <>
            <Tags tags={tags} />
            <p>{text}</p>
          </>
        ) : (
          <div className='need__sub'>Требуется подписка</div>
        )}
      </div>
      {!isSub && (
        <div className='album__img'>
          <Image src={images} width={730} height={800} alt='Album photo' />
        </div>
      )}
      <Actions actionsInfo={actionsInfo} />
    </article>
  )
}
