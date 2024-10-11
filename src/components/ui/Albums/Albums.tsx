import type { IAlbum } from 'src/constants/constants'
import { Album } from './Album'
import './Albums.sass'
export function Albums({ albums }: { albums: IAlbum[] }) {
  return (
    <section className='albums__list'>
      {albums.map(
        ({ author, categories, images, tags, text, title, isSub }, i) => (
          <Album
            author={author}
            categories={categories}
            images={images}
            tags={tags}
            text={text}
            title={title}
            isSub={isSub}
            key={i}
          />
        ),
      )}
    </section>
  )
}
