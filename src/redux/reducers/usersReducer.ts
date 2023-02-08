import { BaseThunkType, InferActionTypes } from '../../types';


type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type UsersPageType = typeof initialState




const initialState = {
  users: [
    { id: '5756hvef', fullname: "T", status: 'Hello', location: {city: 'Tallinn', country: 'Estonia'}, followed: true, },
    { id: '43yrw344', fullname: "Hello", status: 'Hello', location: {city: 'Tallinn', country: 'Estonia'}, followed: false, },
    { id: '3458wejh', fullname: "Hello", status: 'Hello', location: {city: 'Tallinn', country: 'Estonia'}, followed: true, },
  ]
}




export const usersReducer = (
  state = initialState,
  action: ActionType
): UsersPageType => {
  switch (action.type) {
    case 'FOLLOW': 
      return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}
      case 'UNFOLLOW': 
      return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
    default:
      return state
  }
}
export const actions = {
  followAC: (userId: string) => ({ type: 'FOLLOW' as const, payload: userId }),
  unFollowAC: (userId: string) => ({ type: 'UNFOLLOW' as const, payload: userId })
}
