'use client'
import { useProfileTabs } from 'src/store/store'

import { Posts } from 'ui/Post/Posts'
import { Tabs } from 'ui/Tab/Tabs'
import { Abouts } from './BlogPages/Abouts'

import dynamic from 'next/dynamic'
import { usePosts } from 'src/hooks/usePosts'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'
const AlbumsTabs = dynamic(() =>
  import('./BlogPages/Albums').then(mod => mod.AlbumsTabs),
)
const Quests = dynamic(() =>
  import('./BlogPages/Quests').then(mod => mod.Quests),
)

export function Blog({ initData }: { initData: IResponse<IPost> }) {
  const { setTab, tabActive } = useProfileTabs(state => state)

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
