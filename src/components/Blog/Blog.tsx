'use client'
import { useBlogTabs } from 'src/store/store'

import dynamic from 'next/dynamic'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'
import { Tabs } from 'ui/Tab/Tabs'
import PostsTabs from './BlogPages/Posts'

export const Blog = ({ initialData }: { initialData: IResponse<IPost> }) => {
  const { setTab, tabActive } = useBlogTabs(state => state)

  const tabs = () => {
    switch (tabActive) {
      case 0:
        return <PostsTabs initialData={initialData} />
      case 1:
        const AlbumsTabs = dynamic(() =>
          import('./BlogPages/Albums').then(mod => mod.AlbumsTabs),
        )

        return <AlbumsTabs />
      case 2:
        const Quests = dynamic(() =>
          import('./BlogPages/Quests').then(mod => mod.Quests),
        )
        return <Quests />
      case 3:
        const Abouts = dynamic(() =>
          import('./BlogPages/Abouts').then(mod => mod.Abouts),
        )
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
