import type { FC } from 'react'
import { Button } from 'ui/Button/Button'
import './Pagination.sass'

interface IPagination {
  numberPages: number
  // eslint-disable-next-line
  changePage: (page: string) => void
  currentPage?: string
}

const Pagination: FC<IPagination> = ({
  numberPages,
  changePage,
  currentPage = 1,
}) => {
  const length = numberPages > 1 ? Math.ceil(numberPages) : 1
  return (
    !(length <= 1) && (
      <div className='pagination__wrapper'>
        <section className='pagination'>
          {Array.from({
            length,
          }).map((_, index) => {
            const pageNumber = (index + 1).toString()

            return (
              <Button
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                isPagination={true}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </Button>
            )
          })}
        </section>
      </div>
    )
  )
}

export default Pagination
