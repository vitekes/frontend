'use client'
import { useProfileTabs } from 'src/app/store'
import { posts } from 'src/constants/constants'
import { Posts } from 'ui/Post/Posts'
import { Tabs } from 'ui/Tab/Tabs'
import { Abouts } from './BlogPages/Abouts'

import { useAlbums } from 'src/hooks/useAlbums'
import QueryMiddleware from 'src/providers/query-middleware'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'
import { Quests } from './BlogPages/Quests'

export function Blog({ initData }: { initData: IResponse<IAlbum> }) {
  const { setTab, tabActive } = useProfileTabs(state => state)

  const data = useAlbums(initData)

  return (
    <div className='blog__content'>
      <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Лента', 'Альбомы', 'Квесты', 'Об авторе']}
      />
      <QueryMiddleware filters={data}>
        <section className='posts'>
          {tabActive === 0 ? (
            <Posts posts={posts} />
          ) : tabActive === 1 ? (
            <Albums albums={data.data.results} />
          ) : tabActive === 2 ? (
            <Quests />
          ) : (
            tabActive === 3 && <Abouts />
          )}
        </section>
      </QueryMiddleware>
    </div>
  )
}
