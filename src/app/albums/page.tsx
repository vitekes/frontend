'use server'

import albumService from 'src/services/album.service'

import type { Metadata } from 'next'
import { AlbumsPage } from './Albums'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Альбомы' }
}

export default async function page() {
  const data = await albumService.getAll()
  return <AlbumsPage initialData={data} />
}
