import type { IGlobalLines } from 'src/types/album.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Album } from './Album'
import './Albums.sass'
type TProps = { albums: IGlobalLines[]; isLoading?: boolean }
export const Albums = ({ albums, isLoading }: TProps) => {
  if (isLoading) return <SkeletonLoader />
  return (
    <section className='albums__list'>
      {albums.map(album => (
        <Album album={album} key={album.id} />
      ))}
    </section>
  )
}
