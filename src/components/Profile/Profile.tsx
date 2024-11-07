'use client'
import dynamic from 'next/dynamic'
import { useProfileTabs } from 'src/store/store'
import './Profile.sass'

const Profile = () => {
  const tabActive = useProfileTabs(state => state.tabActive)
  switch (tabActive) {
    case 0:
      const MyProfile = dynamic(() => import('./pages/MyProfile'))
      return <MyProfile />

    case 1:
      const MyBlog = dynamic(() => import('./pages/MyBlog'))
      return <MyBlog />
    case 2:
      const Wallet = dynamic(() => import('./pages/Wallet'))
      return <Wallet />
    case 3:
      const Subscribes = dynamic(() => import('./pages/Subscribes'))
      return <Subscribes />
    case 4:
      const Privacy = dynamic(() => import('./pages/Privacy'))
      return <Privacy />
    case 5:
      const Notifications = dynamic(() => import('./pages/Notifications'))
      return <Notifications />
  }
}
export default Profile
