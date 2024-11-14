import { Button } from 'ui/Button/Button'
import { Select } from 'ui/Select/Select'

const data = [
  { key: 'not', label: 'Не показывать' },
  { key: 'all', label: 'Все' },
  { key: 'friend', label: 'Только друзья' },
]
export const PrivacyCanSee = () => {
  const handleChange = (selectedPlatform: { key: string; label: string }) =>
    console.log(selectedPlatform.key)

  return (
    <div className='can__see'>
      <div className='can__see-element'>
        <h2 className='profile__elements-title'>
          Кто может видеть моих платных подписчиков
        </h2>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </div>
      <div className='can__see-element'>
        <h2 className='profile__elements-title'>
          Кто может видеть моих участников
        </h2>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </div>
      <div className='can__see-element'>
        <h2 className='profile__elements-title'>
          Кто может видеть мои публикации
        </h2>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </div>
      <div className='can__see-element'>
        <h2 className='profile__elements-title'>
          Кто может видеть мой заработок
        </h2>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </div>
      <Button className='save__btn' variant='black'>
        Сохранить
      </Button>
    </div>
  )
}
