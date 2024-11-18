import SidebarTitle from '../../SidebarTitle'

type TRules = { text: string; id: number }
const rules: TRules[] = [
  {
    text: 'Статьи должны быть авторскими и не нарушать авторские права третьих лиц. Плагиат запрещён.',
    id: 1,
  },
  {
    text: 'Статьи должны быть грамотно написаны, без большого количества орфографических и грамматических ошибок. Используйте абзацы, подзаголовки и списки для лучшего восприятия информации.',
    id: 2,
  },
  {
    text: 'Если используете информацию из сторонних источников, обязательно указывайте ссылки на них.',
    id: 3,
  },
]

const prohibitions: TRules[] = [
  {
    text: 'Ненавистнические высказывания, дискриминация и ксенофобия.',
    id: 1,
  },
  {
    text: 'Вульгарный или оскорбительный язык.',
    id: 2,
  },
  {
    text: 'Пропаганда насилия, терроризма или незаконных действий.',
    id: 3,
  },
  {
    text: 'Спам.',
    id: 4,
  },
  {
    text: 'Запрещено публиковать личную информацию других людей без их согласия (например, адреса, номера телефонов и т.д.).',
    id: 5,
  },
]
const recommendations: TRules[] = [
  {
    text: 'Чтобы публиковать посты на в общей ленте вы должны получить уровень активности или иметь активную подписку Vifyx Premium.',
    id: 1,
  },
  {
    text: 'Четкость и структура: Разделяйте текст на абзацы, используйте заголовки и списки для удобства чтения.',
    id: 2,
  },
  {
    text: 'Уважайте других: Пишите статьи и комментарии, придерживаясь уважительного тона, чтобы создавать позитивное сообщество.',
    id: 3,
  },
]
const NewSidebar = () => {
  return (
    <div className='sidebar__new'>
      <SidebarTitle isFirst>Правила оформления</SidebarTitle>
      <p>
        Статьи могут быть опубликованы в общий доступ на главной странице сайта.
        К такому контенту предъявляются следующие требования:
      </p>
      <ul className='sidebar__new-rules'>
        {rules.map(rule => (
          <li key={rule.id}>
            <span>{rule.id}.</span> {rule.text}
          </li>
        ))}
      </ul>
      <hr />
      <SidebarTitle>Запрещенный контент</SidebarTitle>
      <ul className='sidebar__new-rules'>
        {prohibitions.map(rule => (
          <li key={rule.id}>
            <span>{rule.id}.</span> {rule.text}
          </li>
        ))}
      </ul>
      <hr />
      <SidebarTitle>Полезные советы</SidebarTitle>
      <ul className='sidebar__new-rules'>
        {recommendations.map(rule => (
          <li key={rule.id}>
            <span>{rule.id}.</span> {rule.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NewSidebar
