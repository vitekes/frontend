import fakeAvatar from 'assets/default-avatar.png'
import cn from 'clsx'
import Image from 'next/image'
import { convertDate } from 'src/utils/convertDate'
import './Author.sass'

type Props = {
  author: string
  date?: Date
  avatar?: string | null
}
export const Author = ({ author, date, avatar }: Props) => (
  <section
    className='author'
    itemProp='author'
    itemType='http://schema.org/Person'
    itemScope
  >
    <Image
      alt='Author Name'
      width={40}
      height={40}
      src={avatar ? avatar : fakeAvatar}
      className={cn({ 'default-avatar': !avatar })}
      itemProp='image'
    />
    <div className='author__content'>
      <span itemProp='name'>{author}</span>
      {date && (
        <time itemProp='dateCreated' dateTime={convertDate(date)}>
          {convertDate(date)}
        </time>
      )}
    </div>
  </section>
)
