import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1" activeClassName={s.active}>Mark</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2" activeClassName={s.active}>Igor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3" activeClassName={s.active}>Kote</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hola</div>
        <div className={s.message}>Hej</div>
      </div>
    </div>
  )
}
