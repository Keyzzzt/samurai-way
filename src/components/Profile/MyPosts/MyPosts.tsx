import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../App';
import React, {FC, useRef} from "react";

type MyPostsProps = {
    posts: PostsType
    newPostText: string
    addPost: () => void
    newPostTextHandler: (text: string) => void

}

export const MyPosts: FC<MyPostsProps> = (props) => {
    const newPostValue = useRef<HTMLTextAreaElement>(null)
    const postComponents = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);

    return (
        <div className={s.container}>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={(e) => props.newPostTextHandler(e.currentTarget.value)} ref={newPostValue} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    )
}
