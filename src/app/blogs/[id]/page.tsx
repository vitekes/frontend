'use server'
import { Blog } from 'src/components/Blog/Blog'
import albumService from 'src/services/album.service'
async function getData() {
  const results = await albumService.getAll()
  return results
}

export default async function page() {
  const data = await getData()
  return <Blog initData={data} />
}
