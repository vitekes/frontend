import fakeAvatar from 'assets/default-avatar.png'
import Image from 'next/image'
import { convertDate } from 'src/utils/convertDate'
import './Author.sass'
type Props = {
  author: string
  date?: Date
  avatar?: string | null
}
export const Author = ({ author, date, avatar }: Props) => (
  <section className='author'>
    <Image
      alt='Author Name'
      width={40}
      height={40}
      src={avatar ? avatar : fakeAvatar}
      className={!avatar ? 'default-avatar' : ''}
    />
    <div className='author__content'>
      {author}
      {date && <time dateTime={convertDate(date)}>{convertDate(date)}</time>}
    </div>
  </section>
)
