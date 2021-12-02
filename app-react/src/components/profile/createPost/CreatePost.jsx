import * as styles from './CreatePost.module.css';
import React from "react";
import {addPostAction, updateNewPostTextAction} from "../../../redux/profileReducer";

const CreatePost = ({state, dispatch}) => {
    let newTextData = state.profilePage.newTextData;

    const addPosts = () => {
        dispatch(addPostAction());
        dispatch(updateNewPostTextAction(''));
    };
    const onChangePost = (event) => {
        let text = event.target.value;
        dispatch(updateNewPostTextAction(text));
    };

    return (
        <div className={styles.createPostContent}>
            <h3>Create Posts</h3>

            <div className={styles.createPostArea}>
                <textarea onChange={onChangePost}
                          value={newTextData}
                          placeholder='Create some post.'/>
            </div>

            <div className={styles.createPostButton}>
                <button onClick={addPosts}>Send</button>
            </div>
        </div>
    )
};

export default CreatePost;