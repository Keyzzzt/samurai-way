import { UPDATE_NEW_MESSAGE_TEXT } from './../actionTypes';
import { DialogsPageType, MessageType } from "./../state"
import { ADD_MESSAGE } from "../actionTypes"
import { ActionType } from "../state"

export const dialogsReducer = (
  state: DialogsPageType,
  action: ActionType
): DialogsPageType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: 4,
        message: state.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ""
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.payload
      return state
    default:
      return state
  }
}

export const addMessageAC = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextAC = (text: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  payload: text,
})