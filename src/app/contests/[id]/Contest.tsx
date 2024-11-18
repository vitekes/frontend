import Image from 'next/image'
import type { IContest } from 'src/types/contest.types'
import { convertDateRadius } from 'src/utils/convertDate'
import slicerTxt from 'src/utils/slicer.util'
import { Button } from 'ui/Button/Button'
import { Title } from 'ui/Title/Title'
export function Contest({
  data: { title, preview, description, end_date, start_date },
}: {
  data: IContest
}) {
  const date = convertDateRadius(start_date, end_date)

  return (
    <article className='contest' itemScope itemType='http://schema.org/Article'>
      <section className='contest__header'>
        <Title tag='h3'>{title}</Title>
        <time itemProp='temporal' dateTime={date}>
          {date}
        </time>
      </section>
      <div itemProp='articleBody' className='contest__body'>
        {preview && (
          <Image
            itemProp='image'
            src={`${preview}`}
            width={1128}
            height={365}
            className='contest__img'
            alt={title + ' Image'}
          />
        )}
        <p itemProp='description' className='contest__description'>
          {slicerTxt(description)}
        </p>
        <Button size='md' variant='black'>
          Детали конкурса
        </Button>
      </div>
    </article>
  )
}
