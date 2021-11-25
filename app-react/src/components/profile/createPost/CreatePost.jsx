import * as styles from './CreatePost.module.css';
import React from "react";

const CreatePost = ({addPost, state, updateNewPostText}) => {

    let messageTextElement = React.createRef();
    const addPosts = () => {
        addPost();
        updateNewPostText('');
    };

    const onChangePost = () => {
        let text = messageTextElement.current.value;
        updateNewPostText(text);
    };

    return (
        <div className={styles.createPostContent}>
            <h3>Create Posts</h3>

            <div className={styles.createPostArea}>
                <textarea onChange={onChangePost} ref={messageTextElement} value={state.newTextData} placeholder='Create some post.'/>
            </div>

            <div className={styles.createPostButton}>
                <button onClick={addPosts}>Send</button>
            </div>
        </div>
    )
};

export default CreatePost;