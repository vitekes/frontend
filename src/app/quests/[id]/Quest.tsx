'use client'
import { useQuery } from '@tanstack/react-query'
import Quest from 'src/components/Quests/Quest'
import questService from 'src/services/quest.service'
import type { IQuestUniq } from 'src/types/quest.types'

const QuestPage = ({ quest }: { quest: IQuestUniq }) => {
  const { data } = useQuery({
    queryKey: ['quest', quest.data.id],
    queryFn: async () => (await questService.getOne(quest.data.id)).data,
    initialData: quest,
  })
  //@ts-ignore
  return <Quest quest={{ data }} isUniq />
}
export default QuestPage
