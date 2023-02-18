import { connect } from "react-redux"
import s from "./users.module.css"
import { Component } from "react"
import {
  actions,
  getUsersTC,
  UsersPageType,
  followTC,
  unFollowTC
} from "../../redux/reducers/usersReducer"
import { StateType } from "../../redux/store"
import { Users } from "./Users"

class UsersClass extends Component<UsersAPIProps> {
  componentDidMount() {
    this.props.getUsersTC(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
  }
  handleChangePage(pageNumber: number) {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsersTC(pageNumber, this.props.usersPage.pageSize)
  }
  render() {
    return (
      <Users
        {...this.props}
        handleChangePage={this.handleChangePage.bind(this)}
      />
    )
  }
}
type MSType = {
  usersPage: UsersPageType
}
type MDType = {
  followTC: (userId: number) => void
  unFollowTC: (userId: number) => void
  getUsersTC: (currentPage: number, pageSize: number) => void
  setCurrentPage: (page: number) => void
}
export type UsersAPIProps = MSType & MDType

const ms = (state: StateType): MSType => {
  return {
    usersPage: state.usersPage,
  }
}
const md = {
  followTC,
  unFollowTC,
  setUsers: actions.setUsersAC,
  setCurrentPage: actions.setCurrentPageAC,
  getUsersTC
}
export const UsersContainer = connect(ms, md)(UsersClass)
