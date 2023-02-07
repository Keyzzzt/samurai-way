import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {useRef } from "react"

type ProfilePage = {
  posts: Array<{id: number; message: string; likesCount: number}>
  newPostText: string
}
type MyPostsProps = {
  profilePage: ProfilePage
  updateNewPostText: (text: string) => void
  addPost: () => void
}


export const MyPosts = ({profilePage, updateNewPostText, addPost}: MyPostsProps) => {
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
