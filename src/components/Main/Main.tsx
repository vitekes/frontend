'use client'
import { posts } from 'src/constants/constants'
import { Posts } from 'ui/Post/Posts'
import { Tabs } from 'ui/Tab/Tabs'
import './Main.sass'

import { useMainTabs } from 'src/app/store'

export function Main() {
  const { setTab, tabActive } = useMainTabs(state => state)
  return (
    <div className='main'>
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
