import { BaseThunkType, InferActionTypes } from "../../types"

type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string | null
    large: string | null
    uniqueUrlName: string | null
  }
  followed: boolean
}
export type UsersPageType = typeof initialState

const initialState = {
  users: [] as UserType[],
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 1,

}

export const usersReducer = (
  state = initialState,
  action: ActionType
): UsersPageType => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
        totalUsersCount: action.payload.totalCount
      }
      case "SET_CURRENT_PAGE":
        return {
          ...state,
          currentPage: action.payload,
        }
      case "FOLLOW":
        return {
          ...state,
          users: state.users.map((u) =>
            u.id === action.payload ? { ...u, followed: true } : u
          ),
        }
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload ? { ...u, followed: false } : u
        ),
      }
    default:
      return state
  }
}
export const actions = {
  setUsersAC: (users: UserType[], totalCount: number) => ({
    type: "SET_USERS" as const,
    payload: {users, totalCount},
  }),
  setCurrentPageAC: (currentPage: number) => ({type: 'SET_CURRENT_PAGE' as const, payload: currentPage}),
  setTotalUsersCountAC: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT' as const, payload: totalCount}),
  followAC: (userId: number) => ({ type: "FOLLOW" as const, payload: userId }),
  unFollowAC: (userId: number) => ({
    type: "UNFOLLOW" as const,
    payload: userId,
  }),
}
