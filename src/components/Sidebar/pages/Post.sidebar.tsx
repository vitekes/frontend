import avatar from 'assets/fake__avatar.png'
import Image from 'next/image'
import type { FC } from 'react'
import slicerTxt from 'src/utils/slicer.util'
interface Props {
  index: number
  author: string
  title: string
  text: string
}

export const SidebarPost: FC<Props> = ({ author, index, text, title }) => (
  <>
    {index !== 0 && <hr />}
    <article className='sidebar__post'>
      <div className='sidebar__post-author'>
        <Image alt='Author' src={avatar} width={32} quality={50} height={32} />
        <span>{author}</span>
      </div>
      <h4>{title}</h4>
      <p>{slicerTxt(text, 140)}</p>
    </article>
  </>
)
