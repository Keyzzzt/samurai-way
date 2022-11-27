import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem'
import {Message} from './Messages/Message'
import {DialogsType, MessagesType} from '../../App';

type DialogsProps = {
    dialogs: DialogsType
    messages: MessagesType
}

export const Dialogs = ({dialogs, messages}: DialogsProps) => {

    const dialogsComponents = dialogs.map((el) => (
        <DialogItem name={el.name} id={el.id}/>
    ))
    const messagesComponents = messages.map((el) => (
        <Message message={el.message}/>
    ))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsComponents}</div>
            <div className={s.messages}>{messagesComponents}</div>
        </div>
    )
}
