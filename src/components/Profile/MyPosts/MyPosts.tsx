import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../App';
import React, {FC, ChangeEvent, useRef} from "react";
import { ActionType } from '../../../redux/state';

type MyPostsProps = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionType) => void


}

export const MyPosts: FC<MyPostsProps> = (props) => {
    const newPostValue = useRef<HTMLTextAreaElement>(null)
    const postComponents = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);
    const updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE_NEW_POST_TEXT", payload: e.currentTarget.value})
    }
    const addPostHandler = () => {
        props.dispatch({type: 'ADD_POST'})
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
