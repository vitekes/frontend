import loop from 'assets/header/loop.svg'
import notification from 'assets/header/notification.svg'
import pencil from 'assets/header/pen.svg'
import Image from 'next/image'
export function HeaderActions() {
  return (
    <>
      <section className='header__actions'>
        <button>
          <Image alt='Create post' src={pencil} width={20} height={20} />
        </button>
        <button>
          <Image alt='Notification' src={notification} width={20} height={20} />
        </button>
        <button>
          <Image alt='Search' src={loop} width={20} height={20} />
        </button>
        <button className='header__button-login'>Войти</button>
      </section>
    </>
  )
}
