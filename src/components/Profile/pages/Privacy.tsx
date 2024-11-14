import dynamic from 'next/dynamic'
import { Heading } from 'ui/Heading/Heading'
import { PrivacyCanSee } from '../components/Privacy/PrivacyCanSee'
import './../components/Privacy/Privacy.sass'
const SetPassword = dynamic(() => import('../components/Privacy/SetPassword'))
export const PrivacyPage = () => {
  return (
    <div className='privacy'>
      <Heading>Приватность</Heading>
      <PrivacyCanSee />
      <hr />
      <Heading style={{ marginTop: 40 }}>Смена пароля</Heading>
      <SetPassword />
    </div>
  )
}
