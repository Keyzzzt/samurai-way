import { MyPostsContainer } from "./MyPosts/MyPostsContainer"
import {FC} from 'react'
import s from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { ProfileType } from "../../redux/reducers/profileReducer"
import { userInfoStateType } from "../../redux/reducers/userInfoReducer"
import { Redirect } from "react-router-dom"

type ProfileProps = {
  profile: ProfileType
  userInfo: userInfoStateType
}
export const Profile: FC<ProfileProps> = ({profile, userInfo}) => {
  

  if(!userInfo.userInfo) {
    return <Redirect to='/login' />
  }

  return (
    <div className={s.profile}>
      <ProfileInfo fullname={profile.fullName} photos={profile.photos} description={profile.lookingForAJobDescription}/>
      <MyPostsContainer/>
    </div>
  )
}
