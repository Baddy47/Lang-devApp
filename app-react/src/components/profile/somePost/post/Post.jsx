import LikeCounts from '../likeCounts/LikeCounts';
import PostMessage from '../postMessage/PostMessage';
import * as styles from './Post.module.css';
import React from "react";

const Post = (props) => {

    let postMessageElements = props.state.postData.map( elem => (<PostMessage message={elem.message} />));

    return (
        <div>
            <div className={styles.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSaNzYlhsLDFFJydScZsv2lcHW9na_VEItg&usqp=CAU" alt="Avatar" />
                <div>{props.state.postData[0].name}</div>
            </div>

            { postMessageElements }

            <LikeCounts likeCounts={props.state.postData[1].likeCounts} text='Like' />

        </div>
    )
};

export default Post;