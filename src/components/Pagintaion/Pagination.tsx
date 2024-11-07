import { useState } from 'react'
import { Button } from '../ui/Button/Button'
import './Pagination.sass'

// interface IPagination {
//   numberPages: number
//   // eslint-disabled-next-line
//   changePage: (page: string) => void
//   currentPage?: string
// }

const Pagination = () => {
  const numberPages = 4
  const [currentPage, changePage] = useState<string>()
  return (
    <div className='pagination__wrapper'>
      <section className='pagination'>
        {Array.from({
          length: numberPages > 1 ? Math.ceil(numberPages) : 1,
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
}

export default Pagination
