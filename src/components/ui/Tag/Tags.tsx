import type { TTag } from 'src/types/global.types'
import './Tag.sass'
export const Tags = ({
  tags,
  className,
}: {
  className?: string
  tags: TTag[]
}) =>
  tags.length !== 0 ||
  (tags[0].title !== '' && (
    <section className={`tags ${className ? className : ''}`}>
      {tags.map(tag => (
        <section className='tag' key={tag.id}>
          {tag.title}
        </section>
      ))}
    </section>
  ))
