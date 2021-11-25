import * as styles from './Messages.module.css';
import React from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";

const Messages = ({state, addMessage, updateNewMessageText}) => {

    let messagesUserElements = state.userData.map(elem => (<MessageUser name={elem.name} id={elem.id} />));
    let messagesItemElements = state.messageData.map(elem => (<MessageItem message={elem.message} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />));

    let messageTextElement = React.createRef();

    let addMessages = () => {
        addMessage();
        updateNewMessageText('');
    };

    let onChangeMessage = ()=> {
        let text = messageTextElement.current.value;
        updateNewMessageText(text);
    };

    return (
        <div className={styles.messages}>
            <div className={styles.messagesUsers}>
                <form className={styles.massageSearch}>
                    <input type='search' placeholder='Search'/>
                </form>
                { messagesUserElements }
            </div>

            <div className={styles.messageWindow}>
                { messagesItemElements }
                <textarea onChange={onChangeMessage} ref={messageTextElement} value={state.newTextMessage} placeholder="Some text"/>
                <button onClick={addMessages}>Send</button>
            </div>
        </div>
    )
};

export default Messages;