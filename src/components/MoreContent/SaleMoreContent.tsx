import { useSaleClose } from 'src/store/store'
import './Sale.sass'

const SaleMoreContent = () => {
  const close = useSaleClose(s => s.close)
  const isOpen = useSaleClose(s => s.isOpen)
  return (
    isOpen && (
      <div className='sale'>
        <p>
          Открой уникальные преимущества. Получи -20% от стоимости всех подписок
        </p>
        <button onClick={() => close()}>x</button>
      </div>
    )
  )
}
export default SaleMoreContent
