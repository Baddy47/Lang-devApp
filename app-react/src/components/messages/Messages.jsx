import * as styles from './Messages.module.css';
import React from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";
import {addMessageAction, updateNewMessageTextAction} from "../../redux/MessageReducer";

const Messages = ({state, dispatch}) => {

    let messagesUserElements = state.messagePage.userData.map(elem =>
        (<MessageUser name={elem.name} id={elem.id} />));
    let messagesItemElements = state.messagePage.messageData.map(elem =>
        (<MessageItem message={elem.message} />));
    let newMessageText = state.messagePage.newTextMessage;

    let addMessage = () => {
        dispatch(addMessageAction());
        dispatch(updateNewMessageTextAction(''));
    };
    let onChangeMessage = (event) => {
        let text = event.target.value;
        dispatch(updateNewMessageTextAction(text));
    };

    return (
        <div className={styles.messages}>

            <div className={styles.messagesUsers}>
                <form className={styles.massageSearch}>
                    <input type='search' placeholder='Search'/>
                </form>
                <div>{ messagesUserElements }</div>
            </div>

            <div className={styles.messageWindow}>
                <div>{ messagesItemElements }</div>
                <div className={styles.textArea}>
                    <textarea onChange={onChangeMessage}
                              value={newMessageText}
                              placeholder="Some text"/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
};

export default Messages;