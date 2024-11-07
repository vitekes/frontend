import type { FC } from 'react'
import { Button } from '../ui/Button/Button'

interface IPagination {
  numberPages: number
  // eslint-disabled-next-line
  changePage: (page: string) => void
  currentPage?: string
}

const Pagination: FC<IPagination> = ({
  numberPages,
  changePage,
  currentPage = 1,
}) => {
  return (
    <section className='pagination'>
      {Array.from({
        length: numberPages > 1 ? Math.ceil(numberPages) : 1,
      }).map((_, index) => {
        const pageNumber = (index + 1).toString()

        return (
          <Button
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            className='mx-2.5'
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </Button>
        )
      })}
    </section>
  )
}

export default Pagination
