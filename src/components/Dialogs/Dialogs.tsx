import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

type DialogItemProps = {
  name: string
  id: number
}
type MessageProps = {
  message: string
}

const DialogItem = ({ name, id }: DialogItemProps) => {
  const path = "/dialogs/" + id
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  )
}

const Message = ({ message }: MessageProps) => {
  return <div className={s.message}>{message}</div>
}

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
  const dialogsComponents = dialogs.map(el => <DialogItem name={el.name} id={el.id} /> )
  const messagesComponents = messages.map(el => <Message message={el.message} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsComponents}
      </div>
      <div className={s.messages}>
        {messagesComponents}
      </div>
    </div>
  )
}
