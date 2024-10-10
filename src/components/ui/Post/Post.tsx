import avatar from 'assets/fake__avatar.png'
import squrle from 'assets/sqarle.png'
import Image from 'next/image'
import { Tag } from '../Tag/Tag'
import './Post.sass'
import { PostActions } from './PostActions'
export interface IPostProps {
  author: string
  categories: string[]
  tags: string[]
  title: string
  text: string
}

export function Post({ author, categories, text, tags, title }: IPostProps) {
  return (
    <article className='post'>
      <div className='post__info'>
        <div className='post__authors'>
          <Image alt='Author Name' width={40} height={40} src={avatar} />
          {author}
        </div>
        <hr />
        <h3>{title}</h3>
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
        <hr />
        <PostActions />
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