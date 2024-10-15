import images from 'assets/woman.png'
import { IAlbum } from 'src/types/album.types'
import { Album } from './Album'
import './Albums.sass'
export function Albums({ albums }: { albums: IAlbum[] }) {
  return (
    <section className='albums__list'>
      {albums.map(
        (
          { user, title, count_comments, count_likes, count_views, date, id },
          i,
        ) => (
          <Album
            author={user}
            categories={['categories']}
            images={images}
            tags={['tags']}
            text={'text'}
            title={title}
            key={i}
          />
        ),
      )}
    </section>
  )
}
