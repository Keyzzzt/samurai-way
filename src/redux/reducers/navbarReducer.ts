import { ADD_MESSAGE } from "../constants"
import { ActionType } from "../../types"

type InitialStateType = typeof initialState
const initialState = {}

export const navbarReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state
    default:
      return state
  }
}
