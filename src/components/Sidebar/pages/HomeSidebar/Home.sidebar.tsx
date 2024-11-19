import AuthorsSidebar from './components/AuthorsSidebar'
import PostsSidebar from './components/PostsSidebar'

export default function HomeSidebar() {
  return (
    <>
      <PostsSidebar />
      <AuthorsSidebar />
      {/* <section className='sidebar__categories'>
        <SidebarTitle>Популярные категории</SidebarTitle>

        <Tags
          tags={[
            { title: 'IT', id: 1 },
            { title: 'Психология', id: 2 },
            { title: 'Зоология', id: 3 },
          ]}
        />
      </section> */}
    </>
  )
}
