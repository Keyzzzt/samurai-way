import { NavbarPageType } from "../state"
import { ADD_MESSAGE } from "../actionTypes"
import { ActionType } from "../state"

export const navbarReducer = (
  state: NavbarPageType,
  action: ActionType
): NavbarPageType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state
    default:
      return state
  }
}
