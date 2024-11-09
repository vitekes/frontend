'use server'

import { PostPage } from 'src/components/Post/Post'

import postService from 'src/services/post.service'
import type { IOneRes } from 'src/types/global.types'
import type { IPost } from 'src/types/post.types'

async function getAllPosts() {
  const data = await postService.getAll()
  return data
}
async function getOnePost(id: number): Promise<IOneRes<IPost>> {
  const postWithStatus = await postService.getOne(id)
  if (postWithStatus.status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return postWithStatus
}

export async function generateStaticParams() {
  const { array } = await getAllPosts()

  return array.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const postWithStatus = await getOnePost(+id)

  return <PostPage initialData={postWithStatus} />
}
