'use client'
import { useQuery } from '@tanstack/react-query'
import comment from 'assets/actions/comments.svg'
import Image from 'next/image'
import commentService from 'src/services/comment.service'
import type { ICommentArray } from 'src/types/comment.types'
import type { IOneRes, TNamespaces } from 'src/types/global.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Comment } from './Comment'
import './Comments.sass'
type TProps = {
  initialData: IOneRes<ICommentArray>
  id: number
  namespace: TNamespaces
}
export const Comments = ({ initialData, id, namespace }: TProps) => {
  const {
    data: { data, status },
    isLoading,
    isPending,
    isFetching,
    isRefetching,
  } = useQuery({
    queryKey: [`comments ${namespace}`, id],
    queryFn: () => commentService.getComments(namespace, id),
    initialData,
  })
  if (isLoading || isPending || isFetching || isRefetching)
    return <SkeletonLoader count={initialData.data.data.length} />
  return (
    <div className='comments__wrapper'>
      <div className='comments__header'>
        <section className='comments__title'>
          <Image width={16} height={16} alt='Comments Title' src={comment} />
          <h3>Комментарии</h3>
        </section>
        <textarea
          className='comments__field'
          placeholder='Написать комментарий'
        />
      </div>

      {status === 404 ? (
        <h4>Комментариев пока нет...</h4>
      ) : (
        <div className='comments'>
          {data.data.map(comment => (
            <>
              <Comment comment={comment} key={comment.id} />
              <hr />
            </>
          ))}
        </div>
      )}
    </div>
  )
}
