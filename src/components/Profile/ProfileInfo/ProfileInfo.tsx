import s from "./ProfileInfo.module.css"
import {FC} from "react";

type ProfileInfoProps = {
  photos: {
    small: string
    large: string
  }
  description: string
  fullname: string
}
export const ProfileInfo :FC<ProfileInfoProps> = ({photos, description, fullname}) => {
  return (
    <div>
      PROFILE INFO
      <div className={s.profileImage}>
        <img src={photos.small} alt="" />
      </div>
      <span>{fullname}</span>
      <div className={s.description}>
        {description}
      </div>
    </div>
  )
}
