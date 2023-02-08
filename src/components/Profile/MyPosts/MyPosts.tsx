import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {useRef } from "react"
import { ProfilePageProps } from "./MyPostsContainer"




export const MyPosts = ({profilePage, updateNewPostText, addPost}: ProfilePageProps) => {
  const newPostValue = useRef<HTMLTextAreaElement>(null)
  const postComponents = profilePage.posts.map((el) => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ))

  return (
    <div className={s.container}>
      <div className={s.addPost}>
        <div>
          <textarea
            onChange={(e) => updateNewPostText(e.currentTarget.value)}
            ref={newPostValue}
            value={profilePage.newPostText}
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
