import * as styles from './CreatePost.module.css';

const CreatePost = () => {
    return (

        <div className={styles.createPostContent}>
            Create Posts
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
        </div>
    )
}

export default CreatePost;