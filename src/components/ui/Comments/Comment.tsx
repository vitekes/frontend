import chat from 'assets/actions/comments.svg'
import heart from 'assets/actions/heart.svg'
import Image from 'next/image'
import type { IComment } from 'src/types/comment.types'
import { Author } from '../Author/Author'
export function Comment({
  comment: { date, text, user, count_likes },
}: {
  comment: IComment
}) {
  return (
    <article className='comment'>
      <Author date={date} author={user} />
      <p>{text}</p>
      <section className='comment__actions'>
        <button>
          <Image alt='Like' width={16} height={16} src={heart} />

          {count_likes}
        </button>
        <button>
          <Image alt='Like' width={16} height={16} src={chat} />
          Ответить
        </button>
      </section>
    </article>
  )
}
