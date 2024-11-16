import { useQuery } from '@tanstack/react-query'
import blogService from 'src/services/blog.service'
import { Tags } from 'ui/Tag/Tags'
import SidebarTitle from '../SidebarTitle'
import { SidebarAuthor } from './Author.sidebar'
import { SidebarPost } from './Post.sidebar'

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
  const { data } = useQuery({
    queryKey: ['posts popular'],
    queryFn: () => blogService.getPopular(),
  })
  return (
    <>
      <section className='sidebar__posts'>
        <SidebarTitle isFirst>Популярное сейчас</SidebarTitle>
        {data?.popular_day.map(
          ({ user: { first_name, last_name }, title, content }, index) => (
            <SidebarPost
              index={index}
              key={index}
              author={`${first_name} ${last_name}`}
              title={title}
              text={content}
            />
          ),
        )}
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
