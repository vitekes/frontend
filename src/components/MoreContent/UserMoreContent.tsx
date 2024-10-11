import elipse from 'assets/elipse.svg'
import avatar from 'assets/fake__avatar.png'
import hat from 'assets/hat.jpg'
import Image from 'next/image'
import './UserMoreContent.sass'
export function UserMoreContent() {
  return (
    <section className='blog__hat'>
      <Image
        className='blog__hat-img'
        src={hat}
        height={hat.height}
        width={hat.width}
        alt='Hat'
      />
      <Image
        className='blog__hat-avatar'
        src={avatar}
        height={160}
        width={160}
        alt='Avatar'
      />
      <section className='blog__hat-info container'>
        <h1>KinoBar</h1>
        <p>Описание сайта, что пользователь здесь увидит</p>
        <div className='blog__hat-info__statistic'>
          <span>1200 подписчиков</span>
          <Image width={8} height={8} src={elipse} alt='Ellipse' />
          <span>750 постов</span>
        </div>
      </section>
    </section>
  )
}
