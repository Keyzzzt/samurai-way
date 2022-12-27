import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {ChangeEvent, useRef } from "react"
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/reducers/profileReducer"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../types"


export const MyPosts = () => {
  
  const dispatch = useDispatch()
  const {posts, newPostText} = useTypedSelector(state => state.profilePage)
  const newPostValue = useRef<HTMLTextAreaElement>(null)

  const postComponents = posts.map((el) => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ))
  const updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewPostTextAC(e.currentTarget.value))
  }
  const addPostHandler = () => {
    dispatch(addPostAC())
  }
  return (
    <div className={s.container}>
      <div className={s.addPost}>
        <div>
          <textarea
            onChange={updateNewPostTextHandler}
            ref={newPostValue}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={addPostHandler}>Add post</button>
        </div>
      </div>
      <div>{postComponents}</div>
    </div>
  )
}
