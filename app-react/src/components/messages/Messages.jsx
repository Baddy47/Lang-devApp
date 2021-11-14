import * as styles from './Messages.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const MessageUser = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={styles.massageUser}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const MessageItem = (props) => {
    return (
        <div className={styles.messageItem}>
            {props.message}
        </div>
    );
};

let messagesUserData = [
    {id: 1, name: 'Simona'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Mila'},
    {id: 4, name: 'Billy'}
];

let messagesItemData = [
    {id: 1, message: 'Hi, what you name?'},
    {id: 1, message: 'My name is Anna'}
];

const Messages = () => {

    let messagesUserElements = messagesUserData.map(elem => (<MessageUser name={elem.name} id={elem.id} />));
    let messagesItemElements = messagesItemData.map(elem => (<MessageItem message={elem.message} />
    ));

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