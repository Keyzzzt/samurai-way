import { API } from '../../api';
import { BaseThunkType, InferActionTypes } from "../../types"

type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type DialogsPageType = typeof initialState

export type UserInfoType = {
  userId: string
  email: string
  login: string
}
export type userInfoStateType = typeof initialState

const initialState = {
  userInfo: null as null | UserInfoType,
  loading: false,
  fail: ''
}

export const userInfoReducer = (
  state = initialState,
  action: ActionType
): userInfoStateType => {
  switch (action.type) {
    case "USER_INFO_REQUEST":
      return {
        ...state,
        loading: true
      }
    case "USER_INFO_SUCCESS":
      return { ...state, userInfo: action.payload, loading: false }
      case "USER_INFO_FAIL":
        return {
          ...state,
          loading: false,
          fail: action.payload
        }
    default:
      return state
  }
}

export const actions = {
  requestAC: () => ({ type: "USER_INFO_REQUEST" as const }),
  successAC: (userInfo: UserInfoType) => ({
    type: "USER_INFO_SUCCESS" as const,
    payload: userInfo,
  }),
  failAC: (errMsg: string) => ({ type: "USER_INFO_FAIL" as const, payload: errMsg }),

}

export const userInfoTC = (): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(actions.requestAC())
      const data = await API.authMe()
      if(data.resultCode === 0) {
        dispatch(actions.successAC(data.data))
      }
      dispatch(actions.failAC(data.messages[0]))
    } catch (error: any) {
      dispatch(actions.failAC(error))
      alert(error)
    }
  }
}