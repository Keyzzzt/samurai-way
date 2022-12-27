import { MyPostsContainer } from "./MyPosts/MyPostsContainer"
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"


export const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  )
}
