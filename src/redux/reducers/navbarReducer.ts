import { BaseThunkType, InferActionTypes } from './../../types';

type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type NavbarType = typeof initialState
const initialState = {}

export const navbarReducer = (
  state = initialState,
  action: ActionType
): NavbarType => {
  switch (action.type) {

    default:
      return state
  }
}

export const actions = {
    add: () => ({type: 'ADD' as const})
}
