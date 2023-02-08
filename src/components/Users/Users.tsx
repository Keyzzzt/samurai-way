import { connect } from "react-redux"
import {FC, Component} from 'react'
import { Dispatch } from "redux"
import { actions, UsersPageType, UserType } from "../../redux/reducers/usersReducer"
import { StateType } from "../../redux/store"
import axios from "axios"


class UsersClass extends Component<UsersProps> {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => this.props.setUsers(res.data.items))
    }
    render(){
        return (
            <div>
            {this.props.usersPage.users.map(u => (
                <div key={u.id}>
                    <div>
                        <span>{u.name}</span>
                        <img src={u.photos.small ? u.photos.small : ''} alt="" />
                        {u.followed ? (<button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>) : (<button onClick={() => this.props.follow(u.id)}>Follow</button>)}
                    </div>
                </div>
            ))}
        </div>
        )
    }
}
type MSType = {
    usersPage: UsersPageType
}
type MDType = {
    follow: (userId: string) => void 
    unFollow: (userId: string) => void 
    setUsers: (users: UserType[]) => void
    
}
export type UsersProps = MSType & MDType

const ms = (state: StateType): MSType => {
    return {usersPage: state.usersPage}
}
const md = (dispatch: Dispatch): MDType => {
    return {
        follow: (userId: string) => {dispatch(actions.followAC(userId))},
        unFollow: (userId: string) => {dispatch(actions.unFollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(actions.setUsers(users))},
    }
}
export const UsersContainer = connect(ms, md)(UsersClass)