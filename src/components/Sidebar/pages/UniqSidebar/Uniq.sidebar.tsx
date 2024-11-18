import sqarle from 'assets/sqarle.png'
import Image from 'next/image'
import { Button } from 'ui/Button/Button'
import { Title } from 'ui/Title/Title'
import SidebarTitle from '../../SidebarTitle'

const UniqSidebar = () => {
  return (
    <div className='sidebar__uniq'>
      <SidebarTitle isFirst>Похожие работы</SidebarTitle>
      {[
        { title: 'Название поста', text: 'Имя пользователя' },
        { title: 'Название поста', text: 'Имя пользователя' },
      ].map(({ title, text }, i) => (
        <article className='sidebar__uniq-post' key={i}>
          <Image src={sqarle} width={330} height={180} alt={title} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
      <hr />
      <section className='sidebar__uniq-premium'>
        <Title tag='h4'>VIFYX Premium</Title>
        <p>Воспользуйтесь всеми возможностями подписки</p>
        <ul>
          <li>Загружать изображения в формате 4K</li>
          <li>Прослушивать статьи с помощью text-to-speech</li>
          <li>И многое другое</li>
        </ul>
        <Button variant='accent' size='md'>
          Купить за $10 в месяц
        </Button>
      </section>
    </div>
  )
}
export default UniqSidebar
