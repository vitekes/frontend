import avatar from 'assets/fake__avatar.png'

import Image from 'next/image'
import { Actions } from '../Actions/Actions'

import type { IAlbum } from 'src/constants/constants'
import { Tag } from '../Tag/Tag'
export function Album({
  author,
  categories,
  text,
  tags,
  title,
  images,
  isSub,
}: IAlbum) {
  console.log(isSub)

  return (
    <article className='album'>
      <div className='album__info'>
        <div className='album__authors'>
          <Image alt='Author Name' width={40} height={40} src={avatar} />
          {author}
        </div>
        <hr />
        <h3>{title}</h3>
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
            <section className='album__tags'>
              {tags.map((txt, index) => (
                <Tag key={index} name={txt} />
              ))}
            </section>
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
      <Actions />
    </article>
  )
}
