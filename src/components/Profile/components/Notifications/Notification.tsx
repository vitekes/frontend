import './Notifications.sass'

type Props = {
  title: string
  description: string
  date: string
}
const Notification = ({ date, description, title }: Props) => {
  return (
    <article className='notification'>
      <div className='notification__text'>
        <div className='circle'></div>
        <div className='nth__circle'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <time dateTime=''>{date}</time>
    </article>
  )
}
export default Notification
