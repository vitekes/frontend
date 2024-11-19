import { useQuery } from '@tanstack/react-query'
import SidebarTitle from 'src/components/Sidebar/SidebarTitle'
import SkeletonLoader from 'src/components/ui/Skeleton/Skeleton'
import blogService from 'src/services/blog.service'
import { SidebarAuthor } from './Author.sidebar'

const AuthorsSidebar = () => {
  const { data, isLoading, isPending, isRefetching } = useQuery({
    queryKey: ['popular authors'],
    queryFn: () => blogService.getPopularAuthors(),
  })
  const loaders = isLoading || isPending || isRefetching
  return (
    <section className='sidebar__authors'>
      <SidebarTitle>Популярные авторы</SidebarTitle>

      {loaders ? (
        <SkeletonLoader count={3} />
      ) : (
        <section className='sidebar__authors-list'>
          {data?.popular_week.map(author => (
            <SidebarAuthor key={author.id} author={author} />
          ))}
        </section>
      )}
    </section>
  )
}
export default AuthorsSidebar
