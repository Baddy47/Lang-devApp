import * as styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.sideBar}>
			<div className={`${styles.item} ${styles.active}`}>Friends</div>
            <div className={styles.item}>Groups</div>
            <div className={styles.item}>Pages</div>
		</nav>
    )
}

export default Sidebar;