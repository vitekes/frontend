'use server'

import { Tabs } from 'src/components/Main/Tabs'
import { Posts } from 'src/components/ui/Post/Posts'
import { posts } from 'src/constants/constants'
import './Main.sass'

export default async function Home() {
  return (
    <div className=''>
      <Tabs />
      <section className='posts'>
        <Posts posts={posts} />
      </section>
    </div>
  )
}
