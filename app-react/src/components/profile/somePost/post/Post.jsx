import LikeCounts from '../likeCounts/LikeCounts';
import PostMessage from '../postMessage/PostMessage';
import * as styles from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={styles.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSaNzYlhsLDFFJydScZsv2lcHW9na_VEItg&usqp=CAU" alt="Avatar" />
                <div>Lorem ipsum dolor sit amet.</div>
            </div>

            <PostMessage message='Lorem ipsum dolor sit.' />
            <PostMessage message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum!'/>
            <LikeCounts likeCounts='100' text='Like' />
        </div>
    )
}

export default Post;