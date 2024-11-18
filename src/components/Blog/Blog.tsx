'use client'
import { useBlogTabs } from 'src/store/store'

import dynamic from 'next/dynamic'
import type { TPostArray } from 'src/types/post.types'
import { Tabs } from 'ui/Tab/Tabs'
import PostsTabs from './BlogPages/Posts'

const AlbumsTabs = dynamic(() =>
  import('./BlogPages/Albums').then(mod => mod.AlbumsTabs),
)
const Quests = dynamic(() =>
  import('./BlogPages/Quests').then(mod => mod.Quests),
)
const Abouts = dynamic(() =>
  import('./BlogPages/Abouts').then(mod => mod.Abouts),
)
export const Blog = ({ initialData }: { initialData: TPostArray }) => {
  const { setTab, tabActive } = useBlogTabs(state => state)

  const tabs = () => {
    switch (tabActive) {
      case 0:
        return <PostsTabs initialData={initialData} />
      case 1:
        return <AlbumsTabs />
      case 2:
        return <Quests />
      case 3:
        return <Abouts />
    }
  }
  return (
    <div className='blog__content'>
      <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Лента', 'Альбомы', 'Квесты', 'Об авторе']}
      />

      <section className='posts'>{tabs()}</section>
    </div>
  )
}
