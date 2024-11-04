import avatar from 'assets/fake__avatar.png'
import Image from 'next/image'
interface Props {
  index: number
  author: string
  title: string
  text: string
}

export function SidebarPost({ author, index, text, title }: Props) {
  return (
    <>
      {index !== 0 && <hr />}
      <article className='sidebar__post'>
        <div className='sidebar__post-author'>
          <Image alt='Author' src={avatar} width={32} height={32} />
          <span>{author}</span>
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
      </article>
    </>
  )
}
