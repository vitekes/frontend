'use server'

import type { Metadata } from 'next'
import { Main } from 'src/components/Main/Main'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Главная' }
}
export default async function Home() {
  return <Main />
}
