import { useQuery } from '@tanstack/react-query'
import contestService from 'src/services/contest.service'
import type { IContest } from 'src/types/contest.types'
import type { IQueryLayout, IResponse } from 'src/types/global.types'

export const useContests = (
  initialData: IResponse<IContest>,
): IQueryLayout<IResponse<IContest>> => {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ['contests'],
    queryFn: () => contestService.getAll(),
    initialData,
  })
  return { data, isLoading, isError, isFetching, error }
}
