'use client'

import { Posts } from 'ui/Post/Posts'
import './Main.sass'

import { usePosts } from 'src/hooks/usePosts'
import QueryMiddleware from 'src/providers/query-middleware'
import type { IResponse } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'

export function Main({ initData }: { initData: IResponse<IPost> }) {
  // const { tabActive, setTab } = useMainTabs(state => state)

  const posts = usePosts(initData)
  return (
    <div className='main'>
      {/* <Tabs
        switchTab={setTab}
        tabActive={tabActive}
        tabs={['Все подряд', 'Отслеживаемые']}
      /> */}
      <QueryMiddleware filters={posts}>
        <Posts posts={posts.data.results} />
      </QueryMiddleware>
    </div>
  )
}
