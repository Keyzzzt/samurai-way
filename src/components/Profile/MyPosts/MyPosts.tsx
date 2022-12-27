import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import React, {FC, ChangeEvent, useRef} from "react";
import { ActionType, PostType } from '../../../redux/state';
import { addPostAC, updateNewPostTextAC } from '../../../redux/reducers/profileReducer';

type MyPostsProps = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void


}


export const MyPosts: FC<MyPostsProps> = (props) => {
    const newPostValue = useRef<HTMLTextAreaElement>(null)
    const postComponents = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);
    const updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    return (
        <div className={s.container}>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={updateNewPostTextHandler} ref={newPostValue} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    )
}
