import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {PostsType} from '../../App';
import React, {FC} from "react";

type ProfileProps = {
    state: {
        posts: PostsType
        newPostText: string
    }
    addPost: () => void
    newPostTextHandler: (text :string) => void

}

export const Profile: FC<ProfileProps> = ({state, addPost, newPostTextHandler}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost} newPostText={state.newPostText} newPostTextHandler={newPostTextHandler}/>
        </div>
    )
}
