import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsType} from '../../App';
import {FC} from "react";

type ProfileProps = {
    state: {
        posts: PostsType
    }
}

export const Profile: FC<ProfileProps> = ({state}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    )
}
