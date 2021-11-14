import * as styles from './CreatePost.module.css';
import React from "react";

const CreatePost = () => {
    return (

        <div className={styles.createPostContent}>
            <h3>Create Posts</h3>

            <div className={styles.createPostArea}>
                <textarea name="" id="" cols="50" rows="10" placeholder='Create some post.'/>
            </div>

            <div className={styles.createPostButton}>
                <button>Send</button>
            </div>
        </div>
    )
};

export default CreatePost;