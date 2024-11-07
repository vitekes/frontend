'use server'

import { Post } from 'src/components/Post/Post'

import postService from 'src/services/post.service'

async function getAllPosts() {
  const data = await postService.getAll()
  return data
}
async function getOnePost(id: number) {
  const { posts, status } = await postService.getOne(id)
  if (status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return posts
}

export async function generateStaticParams() {
  const { array } = await getAllPosts()

  return array.map(({ id }) => ({
    id,
  }))
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const post = await getOnePost(+id)
  return <Post post={post} />
}
