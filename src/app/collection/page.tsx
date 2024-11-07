import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Коллекция' }
}

export default function page() {
  return <>Коллекция</>
}
