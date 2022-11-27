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
  let dialogsData = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Igor" },
    { id: 3, name: "Kote" },
  ]

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hola" },
    { id: 3, message: "Hej" },
  ]
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map((el) => {
          return (
            <div key={el.id}>
              <DialogItem name={el.name} id={el.id} />
            </div>
          )
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((el) => {
          return (
            <div key={el.id}>
              <Message message={el.message} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
