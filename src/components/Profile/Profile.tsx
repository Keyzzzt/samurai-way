import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsType} from '../../App';
import React, {FC} from "react";

type ProfileProps = {
    posts: PostsType
    addPost: (message: string) => void

}

export const Profile: FC<ProfileProps> = ({posts, addPost}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}
