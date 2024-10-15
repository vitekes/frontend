'use server'

import { Post } from 'src/components/Post/Post'
import { IUniqPost } from 'src/types/post.types'

// import { notFound } from 'next/navigation'
// import postService from 'src/services/post.service'

// async function getAllPosts() {
//   const data = await postService.getAll()
//   return data
// }
// async function getOnePost(id: number) {
//   const { posts, status } = await postService.getOne(id)
//   if (status === 404) notFound()
//   return posts
// }

// export async function generateStaticParams() {
//   const { results } = await getAllPosts()

//   return results.map(({ id }) => ({
//     id,
//   }))
// }
const post: IUniqPost = {
  id: 31,
  preview: null,
  title: 'Название альбома',
  content:
    'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
  language: 'russian',
  user: 3,
  count_views: 1,
  count_comments: 0,
  count_likes: 0,
  namespace: 'posts',
  date: new Date('2024-10-10T16:05:22.149821Z'),
  tags: [],
  pinned_comment: 1,
  is_not_subscribed: false,
  is_not_bought: false,
  amount: null,
  is_paid: false,
  category: 1,
  answers: [],
  test: null,
}
export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  // const data = await getOnePost(+id)
  return <Post post={post} />
}
