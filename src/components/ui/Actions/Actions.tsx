import Image from 'next/image'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'

import commentsSVG from 'assets/actions/comments.svg'
import dateSVG from 'assets/actions/date.svg'
import eyeSVG from 'assets/actions/eye.svg'
import heartSVG from 'assets/actions/heart.svg'

import { convertDate } from 'src/utils/convertDate'
import './Actions.sass'

import { TActionsProps } from 'src/types/props.types'

export function Actions({
  actionsInfo: { comments, date, likes, views },
}: TActionsProps) {
  return (
    <>
      <hr className='actions__hr' />
      <section className='actions'>
        <time dateTime={date.toLocaleString()}>
          <Image alt='Date' width={16} height={16} src={dateSVG} />
          {convertDate(new Date(date))}
        </time>
        <span>
          <Image alt='Watches' width={16} height={16} src={eyeSVG} />
          {convertToPrettyString(views)}
        </span>
        <span>
          <Image alt='Likes' width={16} height={16} src={heartSVG} />
          {convertToPrettyString(likes)}
        </span>
        <span>
          <Image alt='Comments' width={16} height={16} src={commentsSVG} />
          {convertToPrettyString(comments)}
        </span>
      </section>
    </>
  )
}
