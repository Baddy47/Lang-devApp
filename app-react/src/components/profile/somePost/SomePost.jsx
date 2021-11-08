import Post from './post/Post';
import * as styles from './SomePost.module.css';

const somePost = () => {
    return (

        <div className={styles.somePostContent}>
            <Post />
        </div>
    )
}

export default somePost;