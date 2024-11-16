import Image from 'next/image'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'

import commentsSVG from 'assets/actions/comments.svg'
import dateSVG from 'assets/actions/date.svg'
import eyeSVG from 'assets/actions/eye.svg'
import heartSVG from 'assets/actions/heart.svg'

import type { TActionsProps } from 'src/types/props.types'
import { convertDate } from 'src/utils/convertDate'
import './Actions.sass'

export function Actions({
  actionsInfo: { comments, date, likes, views },
}: TActionsProps) {
  return (
    <>
      <hr className='actions__hr' />
      <section className='actions'>
        <time itemProp='dataPublisher' dateTime={date.toLocaleString()}>
          <Image alt='Date' width={16} height={16} src={dateSVG} />
          {convertDate(new Date(date))}
        </time>
        <span className='actions__views'>
          <Image alt='Watches' width={16} height={16} src={eyeSVG} />
          {convertToPrettyString(views)}
        </span>
        <span className='actions__likes'>
          <Image alt='Likes' width={16} height={16} src={heartSVG} />
          {convertToPrettyString(likes)}
        </span>
        <span className='actions__comments'>
          <Image alt='Comments' width={16} height={16} src={commentsSVG} />
          {convertToPrettyString(comments)}
        </span>
      </section>
    </>
  )
}
