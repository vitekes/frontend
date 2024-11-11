'use client'
import { useQuery } from '@tanstack/react-query'
import comment from 'assets/actions/comments.svg'
import Image from 'next/image'
import commentService from 'src/services/comment.service'
import type { TNamespaces } from 'src/types/global.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Comment } from './Comment'
import './Comments.sass'
type TProps = {
  id: number
  namespace: TNamespaces
}
export const Comments = ({ id, namespace }: TProps) => {
  const { data, isLoading, isPending, isFetching, isRefetching } = useQuery({
    queryKey: [`comments ${namespace}`, id],
    queryFn: () => commentService.getComments(namespace, id),
    retry: false,
  })
  if (isLoading || isPending || isFetching || isRefetching)
    return <SkeletonLoader count={data?.data.data.length} />
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

      {!data ? (
        <h4 className='hasnt__comments'>Комментариев пока нет...</h4>
      ) : (
        <div className='comments'>
          {data.data.data.map((comment, i) => (
            <>
              <Comment comment={comment} key={comment.id} />
              {!(data.data.data.length === i + 1) && <hr />}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
