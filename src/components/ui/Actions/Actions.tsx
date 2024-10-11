import Image from 'next/image'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'

import comments from 'assets/actions/comments.svg'
import date from 'assets/actions/date.svg'
import eye from 'assets/actions/eye.svg'
import heart from 'assets/actions/heart.svg'

import './Actions.sass'

export function Actions() {
  return (
    <>
      <hr className='actions__hr' />
      <section className='actions'>
        <time dateTime=''>
          <Image alt='Date' width={16} height={16} src={date} />
          13 июня 2024
        </time>
        <span>
          <Image alt='Watches' width={16} height={16} src={eye} />
          {convertToPrettyString(18000)}
        </span>
        <span>
          <Image alt='Likes' width={16} height={16} src={heart} />
          {convertToPrettyString(222)}
        </span>
        <span>
          <Image alt='Comments' width={16} height={16} src={comments} />
          {convertToPrettyString(499)}
        </span>
      </section>
    </>
  )
}
