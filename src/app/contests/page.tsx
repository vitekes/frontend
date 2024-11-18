'use server'
import type { Metadata } from 'next'
import { Contests } from 'src/app/contests/Contests'
import contestService from 'src/services/contest.service'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Конкурсы' }
}

export default async function page() {
  const data = await contestService.getAll()
  return <Contests initialData={data} />
}
