import s from "./MyPosts.module.css"
import {actions, ProfilePageType} from "../../../redux/reducers/profileReducer"
import { connect } from "react-redux"
import { MyPosts } from "./MyPosts"
import { StateType } from "../../../redux/store"
import { Dispatch } from "redux"

type MSType = {
  profilePage: ProfilePageType
}
type MDType = {
  updateNewPostText: (text: string) => void
  addPost: () => void
}
export type ProfilePageProps = MSType & MDType

const ms = (state: StateType): MSType => {
  return {
    profilePage: state.profilePage,
  }
}
const md = (dispatch: Dispatch): MDType => {
  return {
    updateNewPostText(text: string) {
      dispatch(actions.updateNewPostTextAC(text))
    },
    addPost() {
      dispatch(actions.addPostAC())
    },
  }
}

export const MyPostsContainer = connect(ms, md)(MyPosts)
