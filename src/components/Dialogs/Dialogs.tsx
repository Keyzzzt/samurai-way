import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem'
import {Message} from './Messages/Message'
import {DialogsType, MessagesType} from '../../App';

type DialogsProps = {
    state: {
        dialogs: DialogsType
        messages: MessagesType
    }
}

export const Dialogs = ({state}: DialogsProps) => {

    const dialogsComponents = state.dialogs.map((el) => (
        <DialogItem name={el.name} id={el.id}/>
    ))
    const messagesComponents = state.messages.map((el) => (
        <Message message={el.message}/>
    ))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsComponents}</div>
            <div className={s.messages}>{messagesComponents}</div>
        </div>
    )
}
