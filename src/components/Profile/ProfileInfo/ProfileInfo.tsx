import s from "./ProfileInfo.module.css"
import {FC} from "react";

type ProfileInfoProps = {

}
export const ProfileInfo :FC<ProfileInfoProps> = () => {
  return (
    <div>
      <div className={s.profileImage}></div>
      <div className={s.description}>
        
      </div>
    </div>
  )
}
