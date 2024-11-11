import { Heading } from 'ui/Heading/Heading'
import Blogs from '../components/Subscribes/Blogs'
import Subscribes from '../components/Subscribes/Subscribes'
import '../components/Subscribes/Subscribes.sass'
export const SubscribesPage = () => {
  return (
    <div className='profile__subscribes'>
      <Heading>Подписки</Heading>
      <Subscribes />
      <Blogs />
    </div>
  )
}
