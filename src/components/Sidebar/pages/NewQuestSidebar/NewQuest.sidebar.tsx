import cn from 'clsx'
import { useNewQuestsTabs } from 'src/store/store'

const links: string[] = [
  'Настройки',
  'Текст',
  'Оглавление',
  'Доп. материалы',
  'Отзывы',
  'Продажи',
]
const NewQuestSidebar = () => {
  const { setTab, tabActive } = useNewQuestsTabs(state => state)

  return (
    <nav className='sidebar__nav'>
      {links.map((str, i) => (
        <span
          className={cn({ 'sidebar__nav-active': tabActive === i })}
          onClick={() => setTab(i)}
          key={i}
        >
          {str}
        </span>
      ))}
    </nav>
  )
}
export default NewQuestSidebar
