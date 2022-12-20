import s from "./../Dialogs.module.css"
import {FC} from "react";

type MessageProps = {
  message: string
}

export const Message: FC<MessageProps> = ({ message }) => {
  return <div className={s.message}>{message}</div>
}
