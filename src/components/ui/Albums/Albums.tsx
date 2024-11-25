import type { IGlobalLines } from 'src/types/global.types'
import SkeletonLoader from '../Skeleton/Skeleton'
import { Album } from './Album'
import './Albums.sass'
type TProps = { albums: IGlobalLines[]; isLoading?: boolean }
export const Albums = ({ albums, isLoading }: TProps) => {
  if (isLoading) return <SkeletonLoader />
  return (
    <section className='albums__list'>
      {albums.map(album => (
        <Album needRoute album={album} key={album.id} />
      ))}
    </section>
  )
}
