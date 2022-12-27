import { UPDATE_NEW_MESSAGE_TEXT } from '../constants';
import { ADD_MESSAGE } from "../constants"
import { ActionType } from '../../types';


type InitialStateType = typeof initialState


const initialState = {
  messages: [
    { id: '1', message: "Hello" },
    { id: '2', message: "Hola" },
    { id: '3', message: "Hej" },
  ],
  dialogs: [
    { id: '1', name: "Mark" },
    { id: '2', name: "Igor" },
    { id: '3', name: "Kote" },
  ],
  newMessageText: "",
}



export const dialogsReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: '4',
        message: state.newMessageText,
      }
      return {...state, messages: [newMessage, ...state.messages], newMessageText: ''}
    case UPDATE_NEW_MESSAGE_TEXT:
      debugger
      return {...state, newMessageText: action.payload}
    default:
      return state
  }
}

export const addMessageAC = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextAC = (text: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  payload: text,
})