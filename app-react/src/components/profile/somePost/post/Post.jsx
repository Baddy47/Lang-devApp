import LikeCounts from '../likeCounts/LikeCounts';
import PostMessage from '../postMessage/PostMessage';
import * as styles from './Post.module.css';
import React from "react";

let postMessageData = [
    {id: 1, name: 'Simona', message: 'This my car.', likeCounts: 55},
    {id: 2, name: 'Billy', message: 'I found a new job.', likeCounts: 24},
];

const Post = () => {

    let postMessageElements = postMessageData.map( elem => (<PostMessage message={elem.message} />));

    return (
        <div>
            <div className={styles.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSaNzYlhsLDFFJydScZsv2lcHW9na_VEItg&usqp=CAU" alt="Avatar" />
                <div>{postMessageData[0].name}</div>
            </div>

            { postMessageElements }

            <LikeCounts likeCounts={postMessageData[1].likeCounts} text='Like' />

        </div>
    )
};

export default Post;