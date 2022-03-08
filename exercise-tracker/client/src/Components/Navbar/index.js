import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <span className={styles['logo']}>Tracker</span>
            <ul className={styles['links']}>
                <Link to='/' style={{ textDecoration: 'none', color: 'gray' }}> Exercises</Link>
                <Link to='/create' style={{ textDecoration: 'none', color: 'gray' }}> Create Exercise Log</Link>
                <Link to='/user' style={{ textDecoration: 'none', color: 'gray' }}> Create User</Link>
            </ul>
        </nav>
    )
}

export default Navbar