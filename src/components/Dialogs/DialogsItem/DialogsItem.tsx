import React, {FC} from "react";
import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"

type DialogItemProps = {
  name: string
  id: number
}

export const DialogItem: FC<DialogItemProps> = ({ name, id }) => {
  const path = "/dialogs/" + id
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  )
}
