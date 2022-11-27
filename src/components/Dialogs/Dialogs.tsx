import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogsItem/DialogsItem"
import { Message } from "./Messages/Message"

export const Dialogs = () => {
  const dialogs = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Kote" },
  ]
  const messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hola" },
    { id: 3, message: "Hej" },
  ]
  const dialogsComponents = dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ))
  const messagesComponents = messages.map((el) => (
    <Message message={el.message} />
  ))
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsComponents}</div>
      <div className={s.messages}>{messagesComponents}</div>
    </div>
  )
}
