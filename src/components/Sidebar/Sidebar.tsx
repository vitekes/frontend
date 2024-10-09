import './Sidebar.sass'
import { SidebarAuthor } from './SidebarAuthor'
import { SidebarPost } from './SidebarPost'
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

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <section className='sidebar__posts'>
        <h2 className='frst'>Популярное сейчас</h2>
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
        <h2>Популярные категории</h2>
        <section className='sidebar__tags'>
          <section className='sidebar__tag'>Психология</section>
          <section className='sidebar__tag'>IT</section>
          <section className='sidebar__tag'>Путешествия</section>
        </section>
      </section>
      <section className='sidebar__authors'>
        <h2>Популярные авторы</h2>
        <section className='sidebar__authors-list'>
          {authors.map(({ subs, title }, index) => (
            <SidebarAuthor key={index} subs={subs} title={title} />
          ))}
        </section>
      </section>
    </aside>
  )
}
