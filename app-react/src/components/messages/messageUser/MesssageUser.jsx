import * as styles from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const MessageUser = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={styles.massageUser}>
            <img src="https://reqres.in/img/faces/7-image.jpg" alt="avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default MessageUser;