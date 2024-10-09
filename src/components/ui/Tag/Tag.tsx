import './Tag.sass'
export function Tag({ name }: { name: string }) {
  return <section className='tag'>{name}</section>
}
