import * as styles from './PostMessage.module.css';

const PostMessage = (props) => {
    return (

        <div className={styles.itemText}>
            {props.message}
        </div>

    )
}

export default PostMessage;