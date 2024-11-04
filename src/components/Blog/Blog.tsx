'use client'
import { useBlogTabs } from 'src/store/store'

import dynamic from 'next/dynamic'
import { usePosts } from 'src/hooks/usePosts'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'
import { Posts } from 'ui/Post/Posts'
import { Tabs } from 'ui/Tab/Tabs'
const Abouts = dynamic(() =>
  import('./BlogPages/Abouts').then(mod => mod.Abouts),
)
const AlbumsTabs = dynamic(() =>
  import('./BlogPages/Albums').then(mod => mod.AlbumsTabs),
)
const Quests = dynamic(() =>
  import('./BlogPages/Quests').then(mod => mod.Quests),
)

export const Blog = ({ initData }: { initData: IResponse<IPost> }) => {
  const { setTab, tabActive } = useBlogTabs(state => state)

  const {
    data: { results },
  } = usePosts(initData)

  return (
    <div className='blog__content'>
      <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Лента', 'Альбомы', 'Квесты', 'Об авторе']}
      />

      <section className='posts'>
        {tabActive === 0 ? (
          <Posts posts={results} />
        ) : tabActive === 1 ? (
          <AlbumsTabs />
        ) : tabActive === 2 ? (
          <Quests />
        ) : (
          tabActive === 3 && <Abouts />
        )}
      </section>
    </div>
  )
}
