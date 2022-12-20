import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../App';
import React, {FC, useRef} from "react";

type MyPostsProps = {
    posts: PostsType
    addPost: (message: string) => void

}

export const MyPosts: FC<MyPostsProps> = (props) => {
    const newPostValue = useRef<HTMLTextAreaElement>(null)
    const addPostHandler = () => {
        // Три варианта записи, чтобы TS не ругался
        if (newPostValue.current) {
            props.addPost(newPostValue.current.value)
            newPostValue.current.value = ''
        }
        // alert(newPostValue.current?.value)
        // alert(newPostValue.current && newPostValue.current.value)

    }

    const postComponents = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);
    return (
        <div className={s.container}>
            <div className={s.addPost}>
                <div>
                    <textarea ref={newPostValue}/>
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
