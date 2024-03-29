import React from "react";
import * as styles from './Dashboard.module.css';
import buttonPlay from '../../assets/img/btnPlay.svg.svg';

const Dashboard = () => {
    return (
        <section className={styles.dashboardContainer}>
            <div className={styles.gameBlock}>
                <p>The most popular game is <br />
                    <b>Speak IT</b> 
                </p>
                <img className={styles.btnPlay} src={buttonPlay} alt="" />
                <button className={styles.btnRandom}>Play random game</button>
            </div>
            <div className={styles.pointsBlock}>
                <span>Common experience</span>
                <h3>238 points</h3>
            </div>
            <div className={styles.levelBlock}>
                <span>level</span>
                <h3>7 level</h3>
                <p>Learn 750 new words in one course</p>

                <div className={styles.levelBackground}/>
            </div>
        </section>
    )
};

export default Dashboard;