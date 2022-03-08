import React from 'react';
import styles from './Navbar.module.css';
import { ReactComponent as BookSvg } from '../../icons/book.svg'

const index = () => {
    return (
        <div className={styles['nav']}>
            <span className={styles['text']}>Blogs</span>
            <BookSvg className={styles['svg']} />
        </div>
    )
}

export default index