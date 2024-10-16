import squrle from 'assets/sqarle.png'
import Image from 'next/image'
import { IPost } from 'src/constants/constants'
import { Actions } from '../Actions/Actions'
import { Author } from '../Author/Author'
import { Tag } from '../Tag/Tag'
import { Title } from '../Title/Title'
import './Post.sass'

export function Post({ author, categories, text, tags, title }: IPost) {
  return (
    <article className='post'>
      <div className='post__info'>
        <Author author={author} />
        <hr />
        <Title tag='h3'>{title}</Title>
        <section className='post__categories'>
          {categories.map((str, index) => (
            <>
              <span key={index}>{str}</span>
              {index === 0 ? '/' : ''}
            </>
          ))}
        </section>
        <section className='post__tags'>
          {tags.map((txt, index) => (
            <Tag key={index} name={txt} />
          ))}
        </section>
        <p>{text}</p>

        <Actions />
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
