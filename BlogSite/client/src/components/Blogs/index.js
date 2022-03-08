import React from 'react';
import styles from './Blogs.module.css';
import BlogCard from '../BlogCard';

const Blogs = ({ handleLike, blogs, setCurrentId }) => {
    return (
        <div className={styles['blogs']}>
            {blogs.length > 0 ? blogs.map((blog, idx) => {
                return <BlogCard
                    key={idx}
                    id={blog._id}
                    creator={blog.creator}
                    desc={blog.desc}
                    title={blog.title}
                    hashtags={blog.hashtags}
                    createdAt={blog.createdAt}
                    likes={blog.likeCount}
                    image={blog.selectedFile}
                    handleLike={handleLike}
                    setCurrentId={setCurrentId}
                />
            }) : <span className={styles['empty-msg']}>OOPs! No Blogs!</span>}
        </div>
    )
}

export default Blogs