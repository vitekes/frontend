'use client'
import { useAlbums } from 'src/hooks/useAlbums'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'

export function AlbumsPage({ initData }: { initData: IResponse<IAlbum> }) {
  const {
    data: { results },
  } = useAlbums(initData)

  return <Albums albums={results} />
}
