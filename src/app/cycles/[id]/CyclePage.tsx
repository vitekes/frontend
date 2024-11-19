import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import SkeletonLoader from 'src/components/ui/Skeleton/Skeleton'
import cyclesService from 'src/services/cycles.service'
import type { ICycle } from 'src/types/cycles.types'
import type { IOneRes } from 'src/types/global.types'
type Props = {
  initialData: IOneRes<ICycle>
}
const CyclePage: FC<Props> = ({ initialData }) => {
  const { isPending, isFetching, isRefetching } = useQuery({
    queryKey: ['cycle'],
    queryFn: () => cyclesService.getOne(initialData.data.data.id),
    initialData,
  })
  if (isPending || isFetching || isRefetching) return <SkeletonLoader isAlone />
  return <div>Survey</div>
}
export default CyclePage
