import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useOutside } from 'src/hooks/useOutside'
import './Select.sass'
import type { ISelect } from './select.type'
export function Select<K>({ data, onChange, value, title }: ISelect<K>) {
  const { isShow, ref, setIsShow } = useOutside(false)

  return (
    <div className='select' ref={ref}>
      <button
        onClick={() => {
          setIsShow(!isShow)
        }}
        className='select__button'
      >
        {title && <b className='mr-2 text-slate-300'>{title}:</b>}
        {value?.label || 'Select'}
        <ChevronDown className='select__arrow' />
      </button>
      {isShow && (
        <ul className='select__list' role='listbox'>
          {data.map(item => (
            <li
              key={item.key?.toString()}
              className={cn('select__item', {
                'select__item-active': item.key === value?.key,
              })}
              onClick={() => {
                onChange(item)
                setIsShow(false)
              }}
            >
              <span
                className={cn('select__span', {
                  'font-semibold': item.key === value?.key,
                })}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
