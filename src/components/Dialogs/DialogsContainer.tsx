
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "../../redux/reducers/dialogsReducer"
import { connect } from "react-redux"
import { Dialogs } from "./Dialogs"
import { StateType } from "../../redux/store"

const ms = (state: StateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const md = (dispatch: Function) => {
  return {
    addMessage: () => {
      dispatch(addMessageAC())
    },
    changeMessageText: (text: string) => {
      dispatch(updateNewMessageTextAC(text))
    }
  }
}
export const DialogsContainer = connect(ms, md)(Dialogs)
