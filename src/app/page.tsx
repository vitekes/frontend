'use server'

import type { Metadata } from 'next'
import { Main } from 'src/components/Main/Main'
import postService from 'src/services/post.service'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Главная' }
}

export default async function Home() {
  const initialData = await postService.getAll()
  return <Main initialData={initialData} />
}
