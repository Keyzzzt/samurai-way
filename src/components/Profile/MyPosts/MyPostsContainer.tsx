import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/reducers/profileReducer"
import { connect, useDispatch } from "react-redux"
import { useTypedSelector } from "../../../types"
import { MyPosts } from "./MyPosts"
import { StateType } from "../../../redux/store"

const ms = (state: StateType) => {
  return {
    profilePage: state.profilePage,
  }
}
const md = (dispatch: Function) => {
  return {
    updateNewPostText(text: string) {
      dispatch(updateNewPostTextAC(text))
    },
    addPost() {
      dispatch(addPostAC())
    },
  }
}

export const MyPostsContainer = connect(ms, md)(MyPosts)
