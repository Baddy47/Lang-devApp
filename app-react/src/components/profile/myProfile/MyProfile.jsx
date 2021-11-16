import About from '../about/About';
import CreatePost from '../createPost/CreatePost';
import Description from '../description/Description';
import Events from '../events/Events';
import Photos from '../photos/Photos';
import SomePost from '../somePost/SomePost';
import * as styles from './MyProfile.module.css';
import React from "react";

const MyProfile = (props) => {
    return (
        <main className={styles.profileContent}>
            <Description />
            <About />
            <CreatePost />
            <SomePost state={props.state} />
            <Photos />
            <Events />
        </main>
    )
};

export default MyProfile;