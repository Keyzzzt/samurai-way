import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogsItem/DialogsItem"
import { Message } from "./Messages/Message"
import React, { FC, ChangeEvent } from "react"
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "../../redux/reducers/dialogsReducer"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../types"

export const Dialogs: FC = () => {
  const dispatch = useDispatch()
  const {dialogs, messages, newMessageText} = useTypedSelector(state => state.dialogsPage)

  const dialogsElements = dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ))
  const messagesElements = messages.map((el) => (
    <Message message={el.message} />
  ))
  const onClickHandler = () => {
    dispatch(addMessageAC())
  }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onChangeHandler}
            value={newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={onClickHandler}>Add message</button>
        </div>
      </div>
    </div>
  )
}
