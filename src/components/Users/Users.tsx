import { connect } from "react-redux"
import {FC} from 'react'
import { Dispatch } from "redux"
import { actions, UsersPageType } from "../../redux/reducers/usersReducer"
import { StateType } from "../../redux/store"


const Users: FC<UsersProps> = ({usersPage,follow, unFollow}) => {
    return (
        <div>
            {usersPage.users.map(u => (
                <div key={u.id}>
                    <div>
                        <img src="" alt="" />
                        {u.followed ? (<button onClick={() => unFollow(u.id)}>Unfollow</button>) : (<button onClick={() => follow(u.id)}>Follow</button>)}
                    </div>
                    <div>
                        <span>{u.fullname}</span>
                        <span>{u.location.city} {u.location.country}</span>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

type MSType = {
    usersPage: UsersPageType
}
type MDType = {
    follow: (userId: string) => void 
    unFollow: (userId: string) => void 
    
}
export type UsersProps = MSType & MDType

const ms = (state: StateType): MSType => {
    return {usersPage: state.usersPage}
}
const md = (dispatch: Dispatch): MDType => {
    return {
        follow: (userId: string) => {dispatch(actions.followAC(userId))},
        unFollow: (userId: string) => {dispatch(actions.unFollowAC(userId))}
    }
}
export const UsersContainer = connect(ms, md)(Users)