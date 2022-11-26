import s from './Dialogs.module.css'

export const Dialogs = () => {
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          Mark
        </div>
        <div className={s.dialog}>
          Igor
        </div>
        <div className={s.dialog}>
          Kote
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
