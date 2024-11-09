import { Tags } from 'ui/Tag/Tags'
import SidebarTitle from '../SidebarTitle'
import { SidebarAuthor } from './Author.sidebar'
import { SidebarPost } from './Post.sidebar'
const posts = [
  {
    author: 'Иван Иванов',
    title: 'Квесто - Мания Лета',
    text: '"КвестоМания Лета" — это серия увлекательных квестов на свежем воздухе, которые идеально подходят для активного отдыха в теплое время года',
  },
  {
    author: 'Иван Иванов',
    title: 'Квесто - Мания Лета',
    text: '"КвестоМания Лета" — это серия увлекательных квестов на свежем воздухе, которые идеально подходят для активного отдыха в теплое время года',
  },
  {
    author: 'Иван Иванов',
    title: 'Квесто - Мания Лета',
    text: '"КвестоМания Лета" — это серия увлекательных квестов на свежем воздухе, которые идеально подходят для активного отдыха в теплое время года',
  },
]
const authors = [
  {
    subs: 144000,
    title: 'Загадки и приключения',
  },
  {
    subs: 912,
    title: 'Загадки и приключения',
  },
  {
    subs: 1002242502,
    title: 'Загадки и приключения',
  },
  {
    subs: 1250000,
    title: 'Загадки и приключения',
  },
  {
    subs: 144000,
    title: 'Загадки и приключения',
  },
  {
    subs: 145006,
    title: 'Загадки и приключения',
  },
  {
    subs: 124030,
    title: 'Загадки и приключения',
  },
]
export default function HomeSidebar() {
  return (
    <>
      <section className='sidebar__posts'>
        <SidebarTitle isFirst>Популярное сейчас</SidebarTitle>
        {posts.map(({ author, text, title }, index) => (
          <SidebarPost
            index={index}
            key={index}
            author={author}
            title={title}
            text={text}
          />
        ))}
      </section>
      <section className='sidebar__categories'>
        <SidebarTitle>Популярные категории</SidebarTitle>

        <Tags
          tags={[
            { title: 'IT', id: 1 },
            { title: 'Психология', id: 2 },
            { title: 'Зоология', id: 3 },
          ]}
        />
      </section>
      <section className='sidebar__authors'>
        <SidebarTitle>Популярные авторы</SidebarTitle>

        <section className='sidebar__authors-list'>
          {authors.map(({ subs, title }, index) => (
            <SidebarAuthor key={index} subs={subs} title={title} />
          ))}
        </section>
      </section>
    </>
  )
}
