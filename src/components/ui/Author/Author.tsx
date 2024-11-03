import avatar from 'assets/fake__avatar.png'
import Image from 'next/image'
import { convertDate } from 'src/utils/convertDate'
import './Author.sass'
type Props = {
  img?: string
  author: string
  date?: Date
}
export const Author = ({ author, date }: Props) => (
  <section className='author'>
    <Image alt='Author Name' width={40} height={40} src={avatar} />
    <div className='author__content'>
      {author}
      {date && <time dateTime={convertDate(date)}>{convertDate(date)}</time>}
    </div>
  </section>
)
