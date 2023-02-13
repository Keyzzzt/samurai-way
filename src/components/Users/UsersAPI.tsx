import { connect } from "react-redux"
import s from "./users.module.css"
import { Component } from "react"
import { Dispatch } from "redux"
import {
  actions,
  UsersPageType,
  UserType,
} from "../../redux/reducers/usersReducer"
import { StateType } from "../../redux/store"
import { Users } from "./Users"
import { API } from "../../API/api"

class UsersClass extends Component<UsersAPIProps> {
  componentDidMount() {
    API.getUsers(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    ).then((res) => {
      return this.props.setUsers(res.items, res.totalCount)
    })
  }
  handleChangePage(pageNumber: number) {
    this.props.setCurrentPage(pageNumber)
    API.getUsers(pageNumber, this.props.usersPage.pageSize)
      .then((res) => {
        return this.props.setUsers(res.items, res.totalCount)
      })
      .catch((e) => alert(e))
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
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  setUsers: (users: UserType[], totalCount: number) => void
  setCurrentPage: (page: number) => void
}
export type UsersAPIProps = MSType & MDType

const ms = (state: StateType): MSType => {
  return {
    usersPage: state.usersPage,
  }
}
const md = (dispatch: Dispatch): MDType => {
  return {
    follow: (userId: number) => dispatch(actions.followAC(userId)),
    unFollow: (userId: number) => dispatch(actions.unFollowAC(userId)),
    setUsers: (users: UserType[], totalCount: number) =>
      dispatch(actions.setUsersAC(users, totalCount)),
    setCurrentPage: (page: number) => dispatch(actions.setCurrentPageAC(page)),
  }
}
export const UsersContainer = connect(ms, md)(UsersClass)
