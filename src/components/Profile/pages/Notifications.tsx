import { Button } from 'src/components/ui/Button/Button'
import { Heading } from 'ui/Heading/Heading'
import Notification from '../components/Notifications/Notification'
import './../components/Notifications/Notifications.sass'
const notifications = [
  {
    title: 'Название блога',
    description: 'Новые части в работе',
    time: '1ч 15мин. назад',
  },
  {
    title: 'Название',
    description: 'Новые части в работе',
    time: '2ч 15мин. назад',
  },
  {
    title: 'Название блога',
    description: 'Новые части в работе',
    time: '11мин. назад',
  },
  {
    title: 'Название блога',
    description: 'Новые части в работе',
    time: '2мин. назад',
  },
  {
    title: 'Название блога',
    description: 'Новые части в работе',
    time: '2ч назад',
  },
]
export const Notifications = () => {
  return (
    <div className='profile__notifications'>
      <Heading>Уведомления</Heading>
      <section className='profile__notifications-buttons'>
        <Button variant='grey' size='md'>
          Всё прочитано
        </Button>
        <Button variant='black' size='md'>
          Удалить всё
        </Button>
      </section>
      <section className='notifications'>
        {notifications.map(({ description, time, title }, i) => (
          <Notification
            key={i}
            date={time}
            description={description}
            title={title}
          />
        ))}
      </section>
    </div>
  )
}
