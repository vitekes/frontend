'use client'
import dynamic from 'next/dynamic'
import { useNewQuestsTabs } from 'src/store/store'
const Content = dynamic(() => import('./pages/Content'))
const Materials = dynamic(() => import('./pages/Materials'))
const Reviews = dynamic(() => import('./pages/Reviews'))
const Sales = dynamic(() => import('./pages/Sales'))
const Settings = dynamic(() => import('./pages/Settings'))
const Text = dynamic(() => import('./pages/Text'))

const NewQuests = () => {
  const tabActive = useNewQuestsTabs(state => state.tabActive)

  switch (tabActive) {
    case 0:
      return <Settings />
    case 1:
      return <Text />
    case 2:
      return <Content />
    case 3:
      return <Materials />
    case 4:
      return <Reviews />
    case 5:
      return <Sales />
    default:
      return <h1>Ошибка!</h1>
  }
}
export default NewQuests
