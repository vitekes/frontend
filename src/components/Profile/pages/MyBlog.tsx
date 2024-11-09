import { Button } from 'src/components/ui/Button/Button'
import { Heading } from 'ui/Heading/Heading'
import { Blog } from '../components/Blog/Blog'

export const MyBlog = () => {
  return (
    <div className='profile__blogs'>
      <Heading>Мои блоги</Heading>
      <div className='blogs'>
        {['Блог 1', 'Блог 2', 'Блог 3', 'Блог 4'].map((str, i) => (
          <Blog str={str} key={i} />
        ))}
      </div>
      <Button variant='black'>Создать блог</Button>
    </div>
  )
}
