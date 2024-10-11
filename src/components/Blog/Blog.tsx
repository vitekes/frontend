'use client'
import { useProfileTabs } from 'src/app/store'
import { albums, posts } from 'src/constants/constants'
import { Posts } from '../ui/Post/Posts'
import { Tabs } from '../ui/Tab/Tabs'
import { Abouts } from './BlogPages/Abouts'

import { Albums } from '../ui/Albums/Albums'
import { Quests } from './BlogPages/Quests'

export function Blog() {
  const { setTab, tabActive } = useProfileTabs((s) => s)
  return (
    <div className='blog__content'>
      <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Лента', 'Альбомы', 'Квесты', 'Об авторе']}
      />
      <section className='posts'>
        {tabActive === 0 ? (
          <Posts posts={posts} />
        ) : tabActive === 1 ? (
          <Albums albums={albums} />
        ) : tabActive === 2 ? (
          <Quests />
        ) : (
          tabActive === 3 && <Abouts />
        )}
      </section>
    </div>
  )
}
