import * as styles from "../Messages.module.css";

const MessageItem = (props) => {
    return (
        <div className={styles.messageItem}>
            {props.message}
        </div>
    );
};

export default MessageItem;