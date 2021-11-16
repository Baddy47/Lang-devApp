import * as styles from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const MessageUser = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={styles.massageUser}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default MessageUser;