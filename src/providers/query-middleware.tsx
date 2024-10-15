import type { ReactNode } from 'react'
import type { IQueryLayout } from 'src/types/global.types'

interface Props<T> {
  children: ReactNode
  filters: IQueryLayout<T>
}

export default function QueryMiddleware<T>({
  children,
  filters: { data, error, isError, isFetching, isLoading },
}: Props<T>) {
  if (isFetching || isLoading) return <h1>Loading...</h1>
  if (isError || !data) {
    console.error(error)
    return <h1>Error!</h1>
  }

  return children
}
