import { Heading } from '../../ui/Heading/Heading'
import { Blog } from '../components/Blog/Blog'

const MyBlog = () => {
  return (
    <div className='profile__blogs'>
      <Heading>Мои блоги</Heading>
      {['Блог 1', 'Блог 2', 'Блог 3'].map((str, i) => (
        <Blog str={str} key={i} />
      ))}
    </div>
  )
}
export default MyBlog
