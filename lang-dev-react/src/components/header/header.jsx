import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/Icon.svg';
import * as styles from './header.module.css';
import Nav from '../nav/nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>
    )
};

export default Header;