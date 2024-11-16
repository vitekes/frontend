import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { IQuest } from 'src/types/quest.types'
import { convertDate } from 'src/utils/convertDate'
import { Author } from '../ui/Author/Author'
import { NeedRoute } from '../ui/needRoute'
import { Title } from '../ui/Title/Title'
import './Quests.sass'
const QuestActions = dynamic(() => import('./QuestActions'))

const Quest = ({
  isUniq = false,
  quest: {
    title,
    preview,
    date,
    count_comments,
    count_views,
    count_likes,
    description,
    id,
    user: { avatar, first_name, last_name },
  },
}: {
  quest: IQuest
  isUniq?: boolean
}) => {
  const prettyDate = convertDate(new Date(date))
  return (
    <NeedRoute need={!isUniq} link={`/quests/${id}`}>
      <article className='quest' itemScope itemType='http://schema.org/Article'>
        <div className='quest__left'>
          <Image src={preview} width={250} height={500} alt='Image' />
        </div>
        <div className='quest__right'>
          <Title tag='h3'>{title}</Title>
          <Author author={`${first_name} ${last_name}`} avatar={avatar} />

          <time dateTime={prettyDate}>Опубликовано {prettyDate}</time>
          <QuestActions
            actions={{ count_comments, count_views, count_likes }}
          />
          <hr />
          <h4>Описание</h4>
          <p>{description}</p>
        </div>
      </article>
    </NeedRoute>
  )
}
export default Quest
