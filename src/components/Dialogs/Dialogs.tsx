import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogsItem/DialogsItem"
import { Message } from "./Messages/Message"
import { FC } from "react"
import { DialogsPageProps } from "./DialogsContainer"


export const Dialogs: FC<DialogsPageProps> = ({dialogsPage, changeMessageText, addMessage}) => {

  const dialogsElements = dialogsPage.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ))
  const messagesElements = dialogsPage.messages.map((el) => (
    <Message message={el.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={(e) => changeMessageText(e.currentTarget.value)}
            value={dialogsPage.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}
