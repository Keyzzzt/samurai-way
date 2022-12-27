import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/reducers/profileReducer"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../types"
import { MyPosts } from "./MyPosts"

export const MyPostsContainer = () => {
  const dispatch = useDispatch()
  const { posts, newPostText } = useTypedSelector((state) => state.profilePage)

  const updateNewPostText = (text: string) => {
    dispatch(updateNewPostTextAC(text))
  }
  const addPost = () => {
    dispatch(addPostAC())
  }

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  )
}
