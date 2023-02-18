
import {actions, DialogsPageType} from "../../redux/reducers/dialogsReducer"
import { connect } from "react-redux"
import { Dialogs } from "./Dialogs"
import { StateType } from "../../redux/store"
import { Dispatch } from "redux"
import { userInfoStateType } from "../../redux/reducers/userInfoReducer"

type MSType = {
  dialogsPage: DialogsPageType
  userInfo: userInfoStateType
}
type MDType = {
  addMessage: () => void
  changeMessageText: (text: string) => void
}

export type DialogsPageProps = MSType & MDType

const ms = (state: StateType): MSType => {
  return {
    dialogsPage: state.dialogsPage,
    userInfo: state.userInfo
  }
}
const md = (dispatch: Dispatch): MDType => {
  return {
    addMessage: () => {
      dispatch(actions.addMessageAC())
    },
    changeMessageText: (text: string) => {
      dispatch(actions.updateNewMessageTextAC(text))
    }
  }
}
export const DialogsContainer = connect(ms, md)(Dialogs)
