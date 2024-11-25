'use client'
import { useQuery } from '@tanstack/react-query'
import Quest from 'src/components/Quests/Quest'
import questService from 'src/services/quest.service'
import type { IOneRes } from 'src/types/global.types'
import type { IQuestUniq } from 'src/types/quest.types'

const QuestPage = ({ quest }: { quest: IOneRes<IQuestUniq> }) => {
  const {
    title,
    preview,
    date,
    count_comments,
    count_views,
    count_likes,
    content,
    language,
    namespace,
    id,
    user,
  } = useQuery({
    queryKey: ['quest', quest.data.data.id],
    queryFn: async () => await questService.getOne(quest.data.data.id),
    initialData: quest,
  }).data.data.data
  return (
    <Quest
      quest={{
        title,
        preview,
        date,
        count_comments,
        count_views,
        count_likes,
        description: content,
        language,
        namespace,
        id,
        user,
      }}
      isUniq
    />
  )
}
export default QuestPage
