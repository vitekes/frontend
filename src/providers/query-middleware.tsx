import type { ReactNode } from 'react'
import { Loader } from 'src/components/Loader/Loader'
import type { IQueryLayout } from 'src/types/global.types'

interface Props<T> {
  children: ReactNode
  filters: IQueryLayout<T>
}

export default function QueryMiddleware<T>({
  children,
  filters: { data, error, isError, isFetching, isLoading },
}: Props<T>) {
  // if (!IS_CLIENT) return children
  if (isFetching || isLoading) return <Loader />
  if (isError || !data) {
    console.error(error)
    return <h1>Error!</h1>
  }

  return children
}
