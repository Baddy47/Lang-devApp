import * as styles from './Messages.module.css';
import React from "react";
import MessageUser from "./messageUser/MesssageUser";
import MessageItem from "./messageItem/MessageItem";

const Messages = (props) => {

    let messagesUserElements = props.state.userData.map(elem => (<MessageUser name={elem.name} id={elem.id} />));
    let messagesItemElements = props.state.messageData.map(elem => (<MessageItem message={elem.message} />));

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
            </div>

        </div>
    )
};

export default Messages;