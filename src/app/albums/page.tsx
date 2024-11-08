'use server'

import { AlbumsPage } from 'src/components/Albums/Albums'
import albumService from 'src/services/album.service'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Альбомы' }
}

export default async function page() {
  const data = await albumService.getAll()
  return <AlbumsPage initialData={data} />
}
