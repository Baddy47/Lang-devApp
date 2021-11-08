import * as styles from './LikeCounts.module.css';

const LikeCounts = (props) => {
    return (

        <div>
            <span className={styles.likeCounts}>{props.likeCounts}</span>
            <span>{props.text}</span>
        </div>

    )
}

export default LikeCounts;