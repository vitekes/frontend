'use client'
import dynamic from 'next/dynamic'
import { useProfileTabs } from 'src/store/store'
import './Profile.sass'
const MyBlog = dynamic(() => import('./pages/MyBlog').then(mod => mod.MyBlog))
const MyProfile = dynamic(() =>
  import('./pages/MyProfile').then(mod => mod.MyProfile),
)
const Notifications = dynamic(() =>
  import('./pages/Notifications').then(mod => mod.Notifications),
)
const Privacy = dynamic(() =>
  import('./pages/Privacy').then(mod => mod.PrivacyPage),
)
const Subscribes = dynamic(() =>
  import('./pages/Subscribes').then(mod => mod.SubscribesPage),
)
const Wallet = dynamic(() =>
  import('./pages/Wallet').then(mod => mod.WalletProfilePage),
)

const Profile = () => {
  const tabActive = useProfileTabs(state => state.tabActive)
  switch (tabActive) {
    case 0:
      // const MyProfile = (await import('./pages/MyProfile')).default
      return <MyProfile />

    case 1:
      // const MyBlog = (await import('./pages/MyBlog')).default
      return <MyBlog />
    case 2:
      // const Wallet = (await import('./pages/Wallet')).default
      return <Wallet />
    case 3:
      // const Subscribes = (await import('./pages/Subscribes')).default
      return <Subscribes />
    case 4:
      // const Privacy = (await import('./pages/Privacy')).default
      return <Privacy />
    case 5:
      // const { Notifications } = await import('./pages/Notifications')
      return <Notifications />
    default:
      return <h1>Ошибка!</h1>
  }
}
export default Profile
