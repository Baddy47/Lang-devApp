import About from '../about/About';
import CreatePost from '../createPost/CreatePost';
import Description from '../description/Description';
import Events from '../events/Events';
import Photos from '../photos/Photos';
import Post from '../post/Post';
import * as styles from './MyProfile.module.css';
import React from "react";

const MyProfile = ({state, addPost, updateNewPostText}) => {
    return (
        <main className={styles.profileContent}>
            <Description />
            <About />
            <CreatePost addPost={addPost} state={state} updateNewPostText={updateNewPostText} />
            <Post state={state} />
            <Photos />
            <Events />
        </main>
    )
};

export default MyProfile;