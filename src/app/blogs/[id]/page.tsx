'use server'
import postService from 'src/services/post.service'
async function getData() {
  const results = await postService.getAll()
  return results
}

export default async function page() {
  return <></>
  // const data = await getData()
  // return <Blog initData={data} />
}
