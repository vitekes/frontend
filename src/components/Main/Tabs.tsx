'use client'
import { useTabs } from 'src/app/store'
import './Tabs.sass'
export function Tabs() {
  const { setTab, tabActive } = useTabs((state) => state)
  return (
    <section className='main__tabs'>
      <span>{tabActive}</span>
      <button
        className={tabActive === 0 ? 'main__tabs-active ' : ''}
        onClick={() => setTab(0)}
      >
        Всё подряд
      </button>
      <button
        className={tabActive === 1 ? 'main__tabs-active ' : ''}
        onClick={() => setTab(1)}
      >
        Отслеживаемые
      </button>
    </section>
  )
}
