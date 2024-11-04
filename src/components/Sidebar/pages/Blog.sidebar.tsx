import { Subscribe } from 'src/components/ui/Subscribe/Subscribe'

export const BlogSidebar = () => (
  <div className='sidebar__subscribes'>
    <h2>Выберите подписку</h2>
    <Subscribe
      isSub={false}
      name='Эконом'
      price={150}
      rules={['Доступ ко 2-ум роликам']}
      style={'grey'}
    />
    <Subscribe
      isSub={true}
      name='Стандарт'
      price={1500}
      rules={['Доступ ко 8 -и роликам', 'Доступ к прямым эфирам']}
      style={'grey'}
    />
    <Subscribe
      isSub={false}
      name='Бизнес'
      price={15000}
      rules={['Доступ ко всем роликам', 'Доступ к прямым эфирам']}
      style={'grey'}
    />
  </div>
)
