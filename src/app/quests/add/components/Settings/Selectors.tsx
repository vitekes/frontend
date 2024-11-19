import { Select } from 'ui/Select/Select'
import './Settings.sass'
const data = [
  { key: 'not', label: 'Не показывать' },
  { key: 'all', label: 'Все' },
  { key: 'friend', label: 'Только друзья' },
]
const Selectors = () => {
  const handleChange = (selectedPlatform: { key: string; label: string }) =>
    console.log(selectedPlatform.key)

  return (
    <div className='selectors'>
      <label>
        <h3>Форма произведения</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
      <label>
        <h3>Соавтор</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
      <label>
        <h3>Жанр</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
      <label>
        <h3>Цикл</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
      <label>
        <h3>Доп. жанр №1 (не обязательно)</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
      <label>
        <h3>Доп. жанр №2 (не обязательно)</h3>
        <Select
          data={data}
          onChange={handleChange}
          value={data.find(option => option.key === 'not')}
        />
      </label>
    </div>
  )
}
export default Selectors
