'use client'
import { useBlogTabs } from 'src/store/store'

import dynamic from 'next/dynamic'
import { usePosts } from 'src/hooks/usePosts'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'
import { Posts } from 'ui/Post/Posts'
import { Tabs } from 'ui/Tab/Tabs'

export const Blog = ({ initData }: { initData: IResponse<IPost> }) => {
  const { setTab, tabActive } = useBlogTabs(state => state)

  const {
    data: { array },
  } = usePosts(initData)
  const tabs = () => {
    switch (tabActive) {
      case 0:
        return <Posts posts={array} />
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
