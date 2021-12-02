import About from '../about/About';
import CreatePost from '../createPost/CreatePost';
import Description from '../description/Description';
import Events from '../events/Events';
import Photos from '../photos/Photos';
import Post from '../post/Post';
import * as styles from './MyProfile.module.css';
import React from "react";

const MyProfile = ({state, dispatch}) => {
    return (
        <main className={styles.profileContent}>
            <Description />
            <About />
            <CreatePost state={state} dispatch={dispatch} />
            <Post state={state} />
            <Photos />
            <Events />
        </main>
    )
};

export default MyProfile;