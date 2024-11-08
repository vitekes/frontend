import type { Metadata } from 'next'
import questService from 'src/services/quest.service'
import Quests from './Quests'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Квесты' }
}

export default async function page() {
  const quests = await questService.getAll()
  return <Quests quests={quests} />
}
