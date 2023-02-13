import s from "./header.module.css"
import { Component, FC } from "react"
import { Header } from "./Header"
import { StateType } from "../../redux/store"
import { connect } from "react-redux"
import { actions, UserInfoType } from "../../redux/reducers/userInfoReducer"
import { API } from "../../API/api"


class HeaderAPI extends Component<HeaderAPIProps> {
  componentDidMount(): void {
    API.authMe()
    .then(res => {
        return this.props.setUserInfo(res.data)
        
    })
    .catch(e => alert(e))
  }
  render() {
    return (
      <Header login={this.props.login}/>
    )
  }
}

type MS = {
  login: string | undefined
}
type MD = {
  setUserInfo: (userInfo: UserInfoType) => void
}
type HeaderAPIProps = MS & MD

const ms = (state: StateType) => {
  return {
    login: state.userInfo.userInfo?.login
  }
}
const md = {
setUserInfo: actions.successAC
}

export const HeaderContainer = connect(ms, md)(HeaderAPI)