import { Author } from 'src/components/ui/Author/Author'
import { convertDate } from 'src/utils/convertDate'
const data = [
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
  { author: 'Иванов Иван', date: '2024-10-03T21:27:04.909468Z' },
]
const Subscribes = () => {
  return (
    <section className='subscribes'>
      {data.map(({ author, date }, i) => (
        <article key={i} className='subscribe'>
          <Author author={author} />
          <section className='subscribe__action'>
            <h4>Автопродление</h4>
            <input type='checkbox' />
          </section>
          <section className='subscribe__time'>
            Дата окончания:
            <time dateTime={date}>
              {convertDate(new Date(date), 'dd.MM.yyyy')}
            </time>
          </section>
        </article>
      ))}
    </section>
  )
}
export default Subscribes
