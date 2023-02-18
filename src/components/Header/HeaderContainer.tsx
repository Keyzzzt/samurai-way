import s from "./header.module.css"
import { Component, FC } from "react"
import { Header } from "./Header"
import { StateType } from "../../redux/store"
import { connect } from "react-redux"
import { actions, userInfoTC, UserInfoType } from "../../redux/reducers/userInfoReducer"

class HeaderAPI extends Component<HeaderAPIProps> {
  componentDidMount(): void {
    this.props.userInfoTC()
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
  userInfoTC: () => void
}
type HeaderAPIProps = MS & MD

const ms = (state: StateType) => {
  return {
    login: state.userInfo.userInfo?.login
  }
}
const md = {
  userInfoTC
}

export const HeaderContainer = connect(ms, md)(HeaderAPI)