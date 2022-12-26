import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem'
import {Message} from './Messages/Message'
import {DialogsType, MessagesType} from '../../App';
import React, {FC, ChangeEvent} from "react";
import { ActionType, addMessageAC, DialogsPageType, updateNewMessageTextAC } from '../../redux/state';

type DialogsProps = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void

}

export const Dialogs: FC<DialogsProps> = ({state, dispatch}) => {

    const dialogsElements = state.dialogs.map((el) => (
        <DialogItem name={el.name} id={el.id}/>
    ))
    const messagesElements = state.messages.map((el) => (
        <Message message={el.message}/>
    ))
    const onClickHandler = () => {
        dispatch(addMessageAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>{messagesElements}</div>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} value={state.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onClickHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}
