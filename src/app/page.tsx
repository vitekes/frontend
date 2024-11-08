'use server'

import type { Metadata } from 'next'
import { Main } from 'src/components/Main/Main'
import postService from 'src/services/post.service'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Главная' }
}
async function getData() {
  const results = await postService.getAll()
  return results
}
export default async function Home() {
  const initialData = await getData()
  return <Main initialData={initialData} />
}
