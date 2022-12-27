import { FC, ChangeEvent } from "react"
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "../../redux/reducers/dialogsReducer"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../types"
import { Dialogs } from "./Dialogs"

export const DialogsContainer: FC = () => {
  const dispatch = useDispatch()
  const { dialogs, messages, newMessageText } = useTypedSelector(
    (state) => state.dialogsPage
  )

  const addMessage = () => {
    dispatch(addMessageAC())
  }
  const changeMessageText = (text: string) => {
    dispatch(updateNewMessageTextAC(text))
  }
  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageText={newMessageText}
      changeMessageText={changeMessageText}
      addMessage={addMessage}
    />
  )
}
