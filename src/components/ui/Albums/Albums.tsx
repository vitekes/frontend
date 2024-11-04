import type { IAlbum } from 'src/types/album.types'
import { Album } from './Album'
import './Albums.sass'
export const Albums = ({ albums }: { albums: IAlbum[] }) => (
  <section className='albums__list'>
    {albums.map(
      ({
        user,
        title,
        count_comments,
        count_likes,
        count_views,
        date,
        id,
        description,
        preview,
      }) => (
        <Album
          preview={preview}
          user={user}
          categories={['categories']}
          images={preview}
          tags={['tags']}
          text={description}
          title={title}
          key={id}
          id={id}
          needRoute={true}
          actions={{
            actionsInfo: {
              comments: count_comments,
              date: new Date(date),
              likes: count_likes,
              views: count_views,
            },
          }}
        />
      ),
    )}
  </section>
)
