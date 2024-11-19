import { useQuery } from '@tanstack/react-query'
import SidebarTitle from 'src/components/Sidebar/SidebarTitle'
import blogService from 'src/services/blog.service'
import SkeletonLoader from 'ui/Skeleton/Skeleton'
import { SidebarPost } from './Post.sidebar'

const PostsSidebar = () => {
  const { data, isLoading, isFetching, isPending, isRefetching } = useQuery({
    queryKey: ['popular posts'],
    queryFn: () => blogService.getPopularPosts(),
  })
  const loaders = isLoading || isFetching || isPending || isRefetching
  return (
    <section className='sidebar__posts'>
      <SidebarTitle isFirst>Популярное сейчас</SidebarTitle>
      {loaders ? (
        <SkeletonLoader count={3} />
      ) : (
        data?.popular_day.map(
          ({ user: { first_name, last_name }, title, content }, index) => (
            <SidebarPost
              index={index}
              key={index}
              author={`${first_name} ${last_name}`}
              title={title}
              text={content}
            />
          ),
        )
      )}
    </section>
  )
}
export default PostsSidebar
