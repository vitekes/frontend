import commentsSVG from 'assets/actions/comments.svg'
import eyeSVG from 'assets/actions/eye.svg'
import heartSVG from 'assets/actions/heart.svg'
import Image from 'next/image'
import convertToPrettyString from 'src/utils/convertNumberToPrettyString'

type TProps = {
  actions: {
    count_comments: number
    count_views: number
    count_likes: number
  }
}
const QuestActions = ({
  actions: { count_comments, count_likes, count_views },
}: TProps) => {
  return (
    <section className='quest__actions'>
      <span>
        <Image alt='Watches' width={16} height={16} src={eyeSVG} />
        {convertToPrettyString(count_views)}
      </span>
      <span>
        <Image alt='Likes' width={16} height={16} src={heartSVG} />
        {convertToPrettyString(count_likes)}
      </span>
      <span>
        <Image alt='Comments' width={16} height={16} src={commentsSVG} />
        {convertToPrettyString(count_comments)}
      </span>
    </section>
  )
}
export default QuestActions
