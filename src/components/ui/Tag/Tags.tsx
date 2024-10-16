import './Tag.sass'
export function Tags({
  tags,
  className,
}: {
  className?: string
  tags: string[]
}) {
  return (
    !(tags.length === 0) && (
      <section className={`tags ${className ? className : ''}`}>
        {tags.map((tag, index) => (
          <section className='tag' key={index}>
            {tag}
          </section>
        ))}
      </section>
    )
  )
}
