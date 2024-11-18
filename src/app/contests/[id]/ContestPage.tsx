'use client'
import { useQuery } from '@tanstack/react-query'
import SkeletonLoader from 'src/components/ui/Skeleton/Skeleton'
import contestService from 'src/services/contest.service'
import type { IContest } from 'src/types/contest.types'
import type { IOneRes } from 'src/types/global.types'
import { Contest } from './Contest'

const ContestPage = ({ initialData }: { initialData: IOneRes<IContest> }) => {
  const idContest = initialData.data.data.id
  const { data, isFetching, isRefetching, isPending } = useQuery({
    queryKey: ['contest', idContest],
    queryFn: () => contestService.getOne(idContest),
    initialData,
  })
  if (isFetching || isRefetching || isPending) return <SkeletonLoader isAlone />
  return <Contest data={data.data.data} />
}
export default ContestPage
