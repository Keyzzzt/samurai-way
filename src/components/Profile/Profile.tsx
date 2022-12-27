import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import React, {FC} from "react";
import { ActionType, PostType } from '../../redux/state';

type ProfileProps = {
    state: {
        posts: PostType[]
        newPostText: string
    }
    dispatch: (action: ActionType) => void
}

export const Profile: FC<ProfileProps> = ({state, dispatch}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} newPostText={state.newPostText} dispatch={dispatch}/>
        </div>
    )
}
