import { Check } from 'lucide-react'
import type { FC } from 'react'
import { Button } from 'ui/Button/Button'
import type { TRate } from './rate.data'

const Rate: FC<{ rate: TRate }> = ({
  rate: { limit, price, title, isPopular },
}) => {
  return (
    <article className='rate'>
      <h2>{title}</h2>
      {isPopular && (
        <h3 className='rate__most__popular'>Наиболее популярный</h3>
      )}
      <p>Обладая ключом к знаниям, что могут изменить реальный мир</p>
      <div className='rate__price'>
        <span>{price}</span>руб/мес.
      </div>
      <Button variant={isPopular ? 'accent' : 'grey'}>Подключить</Button>
      <div className='rate__limit'>{limit} лимитов</div>
      <div className='rate__includes'>
        <h4>В тариф входит:</h4>
        <ul>
          <li>
            <Check />
            <span>
              Тарифы — это налоги, взимаемые одной страной с товаров,
              импортируемых из другой страны .
            </span>
          </li>
          <li>
            <Check />
            <span>
              Тарифы — это налоги, взимаемые одной страной с товаров,
              импортируемых из другой страны .
            </span>
          </li>
          <li>
            <Check />
            <span>
              Тарифы — это налоги, взимаемые одной страной с товаров,
              импортируемых из другой страны .
            </span>
          </li>
          <li>
            <Check />
            <span>
              Тарифы — это налоги, взимаемые одной страной с товаров,
              импортируемых из другой страны .
            </span>
          </li>
        </ul>
      </div>
    </article>
  )
}
export default Rate
