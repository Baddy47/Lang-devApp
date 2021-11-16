import Post from './post/Post';
import * as styles from './SomePost.module.css';
import React from "react";

const somePost = (props) => {
    return (

        <div className={styles.somePostContent}>
            <Post state={props.state} />
        </div>
    )
};

export default somePost;