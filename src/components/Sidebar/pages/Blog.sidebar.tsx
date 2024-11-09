import { Subscribe } from 'src/components/ui/Subscribe/Subscribe'
import SidebarTitle from '../SidebarTitle'

const BlogSidebar = () => (
  <div className='sidebar__subscribes'>
    <SidebarTitle>Выберите подписку</SidebarTitle>

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
export default BlogSidebar
