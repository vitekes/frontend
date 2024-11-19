import eye from 'assets/actions/eye.svg'
import fakeAvatar from 'assets/default-avatar.png'
import Image from 'next/image'
import type { FC } from 'react'
import type { IAuthor } from 'src/services/blog.service'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'

export const SidebarAuthor: FC<{ author: IAuthor }> = ({
  author: { avatar, first_name, last_name, views_week },
}) => (
  <section className='sidebar__author'>
    <div className='sidebar__author-info'>
      <Image
        width={44}
        height={44}
        quality={50}
        alt='Author'
        src={avatar ? avatar : fakeAvatar}
      />
      <h3>{`${first_name} ${last_name}`}</h3>
    </div>
    <div className='sidebar__author-sub'>
      <Image width={18} quality={50} height={15.5} alt='Subscribes' src={eye} />
      {convertToPrettyString(views_week)}
    </div>
  </section>
)
