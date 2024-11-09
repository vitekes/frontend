'use client'
import { useProfileTabs } from 'src/store/store'
import './Profile.sass'

const profileTabs = async (tabActive: number) => {
  switch (tabActive) {
    case 0:
      const MyProfile = (await import('./pages/MyProfile')).default
      return <MyProfile />

    case 1:
      const MyBlog = (await import('./pages/MyBlog')).default
      return <MyBlog />
    case 2:
      const Wallet = (await import('./pages/Wallet')).default
      return <Wallet />
    case 3:
      const Subscribes = (await import('./pages/Subscribes')).default
      return <Subscribes />
    case 4:
      const Privacy = (await import('./pages/Privacy')).default
      return <Privacy />
    case 5:
      const { Notifications } = await import('./pages/Notifications')
      return <Notifications />
  }
}

const Profile = () => {
  const tabActive = useProfileTabs(state => state.tabActive)
  profileTabs(tabActive)
}
export default Profile
