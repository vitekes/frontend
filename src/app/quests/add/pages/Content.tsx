import eye from 'assets/actions/eye.svg'
import trash from 'assets/actions/trash.svg'
import Image from 'next/image'
import { Button } from 'ui/Button/Button'
import { Heading } from 'ui/Heading/Heading'
import './../components/Content/Content.sass'
const Content = ({ i }: { i: number }) => {
  return (
    <article className='chapter'>
      <h3>Глава {i + 1}.</h3>
      <section className='chapter__actions'>
        <button>
          <Image src={eye} alt='View' quality={50} width={18} height={18} />
        </button>
        <button>
          <Image src={trash} alt='Trash' quality={50} width={18} height={18} />
        </button>
      </section>
    </article>
  )
}

const ContentPage = () => {
  return (
    <div className='content'>
      <Heading>Название работы</Heading>
      <section className='content__buttons'>
        <Button variant='grey'>Сохранить порядок</Button>
        <Button variant='grey'>Отменить изменения</Button>
        <Button variant='black'>Добавить часть</Button>
      </section>

      <section className='chapters'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Content key={i} i={i} />
        ))}
      </section>
      <section className='content__buttons'>
        <Button variant='grey'>Скрыть всё</Button>
        <Button variant='black'>Опубликовать всё</Button>
      </section>
    </div>
  )
}
export default ContentPage
