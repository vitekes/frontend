'use server'
import { Blog } from 'src/components/Blog/Blog'
import postService from 'src/services/post.service'
async function getData() {
  const results = await postService.getAll()
  return results
}

export default async function page() {
  const data = await getData()
  return <Blog initData={data} />
}
