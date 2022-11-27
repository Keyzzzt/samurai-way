import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import {PostsType} from '../../App';

type ProfileProps = {
    posts: PostsType
}

export const Profile = ({posts}: ProfileProps) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}
