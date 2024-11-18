'use server'
import { Blog } from 'src/components/Blog/Blog'
import postService from 'src/services/post.service'

export default async function page() {
  const data = await postService.getAll()
  return <Blog initialData={data} />
}
