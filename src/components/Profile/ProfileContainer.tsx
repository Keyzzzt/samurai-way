import { Component } from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { getProfileTC, ProfileType } from "../../redux/reducers/profileReducer"
import { userInfoStateType } from "../../redux/reducers/userInfoReducer"
import { StateType } from "../../redux/store"
import { Profile } from "./Profile"
import s from "./Profile.module.css"

// Типизация url параметров
type PathParamsType = {
  userId: string
}
// Склеиваем типы
type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIProps

// Отдаем union тип пропсов компоненте
export class ProfileAPI extends Component<PropsType> {
  componentDidMount() {
    let userId = +this.props.match.params.userId
    if(!userId) {
      userId = 2
    }
    this.props.getProfileTC(userId)
  }
  render() {
    return <Profile profile={this.props.profile} userInfo={this.props.userInfo}/>
  }
}

type MS = {
  profile: ProfileType
  userInfo: userInfoStateType
}
type MD = {
  getProfileTC: (userId: number) => void
}
type ProfileAPIProps = MS & MD
const ms = (state: StateType): MS => {
  return {
    profile: state.profilePage.profile,
    userInfo: state.userInfo
  }
}
const md: MD = {
  getProfileTC
}



export const ProfileContainerWithURL = withRouter(ProfileAPI)
export const ProfileContainer = connect(ms, md)(ProfileContainerWithURL)
