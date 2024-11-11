import { Author } from 'src/components/ui/Author/Author'

const data = [
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
  { author: 'Название блога' },
]
const Blogs = () => {
  return (
    <div className='subscribes__blogs'>
      <h2>Подписки на блоги</h2>
      <div className='blogs'>
        {data.map(({ author }, i) => (
          <article className='subscribes__blog' key={i}>
            <Author author={author} />
          </article>
        ))}
      </div>
    </div>
  )
}
export default Blogs
