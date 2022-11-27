import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"

type DialogItemProps = {
  name: string
  id: number
}


export const DialogItem = ({ name, id }: DialogItemProps) => {
  const path = "/dialogs/" + id
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  )
}
