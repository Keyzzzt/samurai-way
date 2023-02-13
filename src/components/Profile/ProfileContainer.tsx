import axios from "axios"
import { Component } from "react"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { actions, ProfileType } from "../../redux/reducers/profileReducer"
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
    const userId = this.props.match.params.userId
    console.log(userId)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => this.props.setProfile(res.data))
  }
  render() {
    return <Profile profile={this.props.profile}/>
  }
}

type MS = {
  profile: ProfileType
}
type MD = {
  setProfile: (profile: ProfileType) => void
}
type ProfileAPIProps = MS & MD
const ms = (state: StateType): MS => {
  return {
    profile: state.profilePage.profile
  }
}
const md: MD = {
  setProfile: actions.setProfileAC
}



export const ProfileContainerWithURL = withRouter(ProfileAPI)
export const ProfileContainer = connect(ms, md)(ProfileContainerWithURL)
