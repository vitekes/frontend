'use client'
import { useAlbums } from 'src/hooks/useAlbums'
import type { IAlbum } from 'src/types/album.types'
import type { IResponse } from 'src/types/global.types'
import { Albums } from 'ui/Albums/Albums'
import Pagination from '../Pagintaion/Pagination'

export function AlbumsPage({ initData }: { initData: IResponse<IAlbum> }) {
  const {
    data: { array },
  } = useAlbums(initData)

  return (
    <div className=''>
      <Albums albums={array} />
      <Pagination />
    </div>
  )
}
