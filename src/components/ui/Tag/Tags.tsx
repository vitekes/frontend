import './Tag.sass'
export const Tags = ({
  tags,
  className,
}: {
  className?: string
  tags: string[]
}) =>
  tags.length !== 0 ||
  (tags[0] !== '' && (
    <section className={`tags ${className ? className : ''}`}>
      {tags.map((tag, index) => (
        <section className='tag' key={index}>
          {tag}
        </section>
      ))}
    </section>
  ))
