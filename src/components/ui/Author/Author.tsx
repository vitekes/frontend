import avatar from 'assets/fake__avatar.png'
import Image from 'next/image'
import './Author.sass'
export function Author({ author }: { img?: string; author: string }) {
  return (
    <section className='author'>
      <Image alt='Author Name' width={40} height={40} src={avatar} />
      {author}
    </section>
  )
}
