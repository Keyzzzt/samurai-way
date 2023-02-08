import { BaseThunkType, InferActionTypes } from "../../types"

type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type UserType = {
  id: string
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
}

export const usersReducer = (
  state = initialState,
  action: ActionType
): UsersPageType => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
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
  setUsers: (users: UserType[]) => ({
    type: "SET_USERS" as const,
    payload: users,
  }),
  followAC: (userId: string) => ({ type: "FOLLOW" as const, payload: userId }),
  unFollowAC: (userId: string) => ({
    type: "UNFOLLOW" as const,
    payload: userId,
  }),
}
