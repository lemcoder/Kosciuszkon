import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.titleContainer}>
                <h2>KOŚCIUSZKON</h2>
                <NavLink to="map">Map page</NavLink>
            </div>
        </main>
    );
};

export default LandingPage;
