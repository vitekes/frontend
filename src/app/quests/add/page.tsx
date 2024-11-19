import type { Metadata } from 'next'
import NewQuests from './NewQuests'

export const metadata: Metadata = {
  title: 'Новый квест',
}

const page = () => {
  return <NewQuests />
}
export default page
