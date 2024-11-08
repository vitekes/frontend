import type { Metadata } from 'next'
import { allItems } from 'src/constants/constants'
import questService from 'src/services/quest.service'
import QuestPage from './Quest'

async function getOneQuest(id: number) {
  const { data, status } = await questService.getOne(id)
  if (status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return data
}
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  const {
    data: {
      title,
      content: description,
      language,
      preview,
      user: { username, last_name, first_name },
    },
  } = await getOneQuest(+id)

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
  const { array } = await questService.getAll(allItems)

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
