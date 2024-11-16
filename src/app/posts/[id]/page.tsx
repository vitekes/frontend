'use server'

import { PostPage } from 'src/components/Post/Post'

import type { Metadata } from 'next'
import postService from 'src/services/post.service'
import type { TParams } from 'src/types/global.types'
import type { TOnePost } from 'src/types/post.types'

async function getAllPosts() {
  const data = await postService.getAll()
  return data
}
async function getOnePost(id: number): Promise<TOnePost> {
  const postWithStatus = await postService.getOne(id)
  if (postWithStatus.status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return postWithStatus
}

export async function generateMetadata({
  params: { id },
}: TParams): Promise<Metadata> {
  const {
    data: {
      data: { title, content, preview },
    },
  } = await getOnePost(id)
  return { title, description: content, openGraph: { images: preview } }
}
export async function generateStaticParams() {
  const { array } = await getAllPosts()

  return array.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function Page({ params: { id } }: TParams) {
  const postWithStatus = await getOnePost(+id)

  return <PostPage initialData={postWithStatus} />
}
