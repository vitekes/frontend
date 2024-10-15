import success from 'assets/success.svg'
import Image from 'next/image'
import toast from 'react-hot-toast'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'
import { Button } from '../Button/Button'
import './Subscribe.sass'
interface Props {
  name: string
  price: number
  isSub: boolean
  rules: string[]
  style: 'grey' | 'white'
}

export function Subscribe({ rules, isSub, name, price, style }: Props) {
  return (
    <section
      className={
        style === 'grey'
          ? 'subscribe subscribe-grey'
          : 'subscribe subscribe-white'
      }
    >
      <h3
        className={
          isSub ? 'subscribe__title subscribe__sub' : 'subscribe__title'
        }
      >
        {name}
      </h3>
      <p className='subscribe__price'>
        {isSub ? 'Вы подписаны' : `$${convertToPrettyString(price)} в месяц`}
      </p>
      <ul className='subscribe__rules'>
        {rules.map((str, i) => (
          <li className='subscribe__rule' key={i}>
            <Image width={16} height={16} src={success} alt={'Галочка'} />
            {str}
          </li>
        ))}
      </ul>
      <div className='subscribe__button'>
        {!isSub ? (
          <Button onClick={() => toast.success('You have subscribed!')}>
            Подписаться
          </Button>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}
