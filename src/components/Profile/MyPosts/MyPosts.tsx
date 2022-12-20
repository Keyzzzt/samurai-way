import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../App';
import React, {FC, useRef} from "react";

type MyPostsProps = {
    posts: PostsType
}

export const MyPosts: FC<MyPostsProps> = ({posts}) => {
    const newPostValue = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        // Три варианта записи, чтобы TS не ругался
        // if (newPostValue.current) {
        //     alert(newPostValue.current.value)
        // }
        // alert(newPostValue.current?.value)
        alert(newPostValue.current && newPostValue.current.value)

    }

    const postComponents = posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);
    return (
        <div className={s.container}>
            <div className={s.addPost}>
                <div>
                    <textarea ref={newPostValue}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    )
}
