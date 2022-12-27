import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {useRef } from "react"

type MyPostsProps = {
  posts: Array<{id: number; message: string; likesCount: number}>
  newPostText: string
  updateNewPostText: (text: string) => void
  addPost: () => void
}


export const MyPosts = ({posts, newPostText, updateNewPostText, addPost}: MyPostsProps) => {
  const newPostValue = useRef<HTMLTextAreaElement>(null)
  const postComponents = posts.map((el) => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ))

  return (
    <div className={s.container}>
      <div className={s.addPost}>
        <div>
          <textarea
            onChange={(e) => updateNewPostText(e.currentTarget.value)}
            ref={newPostValue}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>{postComponents}</div>
    </div>
  )
}
