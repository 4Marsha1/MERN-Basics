import React from 'react';
import styles from './HomeScreen.module.css';
import Navbar from '../Navbar'
import Blogs from '../Blogs';
import NewBlog from '../NewBlog';

const HomeScreen = ({ state, handleChange, handleSubmit, handleLike, handleImg, currentId, setCurrentId, blogs, editBlog }) => {
    return (
        <div className={styles['container']}>
            <Navbar />
            <div className={styles['blog-section']}>
                <Blogs
                    handleLike={handleLike}
                    blogs={blogs}
                    setCurrentId={setCurrentId}
                />
                <NewBlog
                    state={state}
                    blogs={blogs}
                    editBlog={editBlog}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleImg={handleImg}
                    currentId={currentId}
                />
            </div>
        </div>
    )
}

export default HomeScreen