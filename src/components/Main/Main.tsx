'use client'
import { Posts } from 'src/components/ui/Post/Posts'
import { Tabs } from 'src/components/ui/Tab/Tabs'
import { posts } from 'src/constants/constants'
import './Main.sass'

import { useMainTabs } from 'src/app/store'

export function Main() {
  const { setTab, tabActive } = useMainTabs((state) => state)
  return (
    <div className=''>
      <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Все подряд', 'Отслеживаемые']}
      />
      <section className='posts'>
        <Posts posts={posts} />
      </section>
    </div>
  )
}
