import 'Profile.sass'
import { useProfileTabs } from 'src/store/store'

const Profile = () => {
  const { setTab, tabActive } = useProfileTabs(state => state)
  return <div>Profile</div>
}
export default Profile
