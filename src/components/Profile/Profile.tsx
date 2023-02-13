import { MyPostsContainer } from "./MyPosts/MyPostsContainer"
import {FC} from 'react'
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { ProfileType } from "../../redux/reducers/profileReducer"

type ProfileProps = {
  profile: ProfileType
}
export const Profile: FC<ProfileProps> = ({profile}) => {
  return (
    <div className={s.profile}>
      <ProfileInfo fullname={profile.fullName} photos={profile.photos} description={profile.lookingForAJobDescription}/>
      <MyPostsContainer/>
    </div>
  )
}
