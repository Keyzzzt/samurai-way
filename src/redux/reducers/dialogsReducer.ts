import { BaseThunkType, InferActionTypes } from '../../types';


type ThunkType = BaseThunkType<ActionType>
type ActionType = InferActionTypes<typeof actions>
export type DialogsPageType = typeof initialState




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
): DialogsPageType => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const newMessage = {
        id: '4',
        message: state.newMessageText,
      }
      return {...state, messages: [newMessage, ...state.messages], newMessageText: ''}
    case 'UPDATE_NEW_MESSAGE_TEXT':
      return {...state, newMessageText: action.payload}
    default:
      return state
  }
}

export const actions = {
  addMessageAC: () => ({ type: 'ADD_MESSAGE' as const }),
  updateNewMessageTextAC: (text: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT' as const,
    payload: text,
  })
}