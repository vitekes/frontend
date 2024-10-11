import './Tabs.sass'
type Props = {
  tabs: string[]
  // eslint-disable-next-line
  switchTab: (id: number) => void
  tabActive: number
}

export function Tabs({ tabs, switchTab, tabActive }: Props) {
  return (
    <div className='tabs'>
      <section className='tabs__group'>
        {tabs.map((name, id) => (
          <button
            key={id}
            className={tabActive === id ? 'tab tab-active' : 'tab'}
            onClick={() => switchTab(id)}
          >
            {name}
          </button>
        ))}
      </section>
      <hr />
    </div>
  )
}
