import avatar from 'assets/fake__avatar.png'
import humans from 'assets/humans.svg'
import Image from 'next/image'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'
interface Props {
  subs: number
  title: string
}

export function SidebarAuthor({ subs, title }: Props) {
  return (
    <section className='sidebar__author'>
      <div className='sidebar__author-info'>
        <Image width={44} height={44} quality={50} alt='Author' src={avatar} />
        <h3>{title}</h3>
      </div>
      <div className='sidebar__author-sub'>
        <Image width={18} height={15.5} alt='Subscribes' src={humans} />
        {convertToPrettyString(subs)}
      </div>
    </section>
  )
}
