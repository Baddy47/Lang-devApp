import About from '../about/About';
import CreatePost from '../createPost/CreatePost';
import Description from '../description/Description';
import Events from '../events/Events';
import Photos from '../photos/Photos';
import SomePost from '../somePost/SomePost';
import * as styles from './MyProfile.module.css';

const MyProfile = () => {
    return (
        <main className={styles.profileContent}>
            
            <Description />
            <About />
            <CreatePost />
            <SomePost />
            <Photos />
            <Events />
        
        </main>
    )
}

export default MyProfile;