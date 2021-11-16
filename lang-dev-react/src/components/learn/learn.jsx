import * as styles from './Learn.module.css';
import React, {useEffect} from "react";

const Learn = ({speak, library, wordIndex}) => {
    useEffect(() => {
        speak(library[wordIndex].translate);
    }, [wordIndex, library, speak]);

    return (
        <section className={styles.libraryBlock}>
            <span>{library[wordIndex].word}</span>
            <h3>{library[wordIndex].translate}</h3>
        </section>
    )
};

export default Learn;