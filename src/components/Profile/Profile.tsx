import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profileImage}></div>
      <MyPosts />
    </div>
  )
}
