import type { Metadata } from 'next'
import { ALL_ITEMS } from 'src/constants/constants'
import questService from 'src/services/quest.service'
import type { IOneRes } from 'src/types/global.types'
import type { IQuestUniq } from 'src/types/quest.types'
import QuestPage from './Quest'

async function getOneQuest(id: number): Promise<IOneRes<IQuestUniq>> {
  const quests = await questService.getOne(id)
  if (quests.status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return quests
}
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  const {
    title,
    content: description,
    language,
    preview,
    user: { username, last_name, first_name },
  } = (await getOneQuest(+id)).data.data

  return {
    title,
    description,
    authors: { name: username },
    openGraph: {
      lastName: last_name,
      firstName: first_name,
      locale: language,
      title,
      description,
      images: preview,
    },
  }
}
export async function generateStaticParams() {
  const { array } = await questService.getAll(ALL_ITEMS)

  return array.map(({ id }) => ({
    id: id.toString(),
  }))
}
type TProps = {
  params: {
    id: number
  }
}
export default async function page({ params: { id } }: TProps) {
  const quest = await getOneQuest(id)

  return <QuestPage quest={quest} />
}
