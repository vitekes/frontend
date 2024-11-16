import type { Metadata } from 'next'
import { Heading } from 'src/components/ui/Heading/Heading'
import Rate from './Rate'
import './Rates.sass'
import { ratesData } from './rate.data'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Тарифы', description: 'Выбор тарифа' }
}
export default function page() {
  return (
    <div>
      <Heading>Выбор тарифа</Heading>
      <div className='rates'>
        {ratesData.map(rate => (
          <Rate rate={rate} key={rate.id} />
        ))}
      </div>
    </div>
  )
}
