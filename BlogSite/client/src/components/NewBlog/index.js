import React from 'react';
import styles from './NewBlog.module.css';
import FileBase from 'react-file-base64'
import { useEffect } from 'react';

const NewBlog = ({ state, blogs, handleChange, handleSubmit, handleImg, currentId, editBlog }) => {
    let { creator, title, desc, hashtags, likes, selectedFile } = state;
    useEffect(() => {
        if (currentId !== null) {
            const blog = blogs.filter(blog => blog._id === currentId);
            if (blog) {
                editBlog(blog)
            }
        }
    }, [currentId])
    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <span> {currentId === null ? 'Creating' : 'Editing'} New Blog</span>
                <input
                    type="text"
                    name="creator"
                    id="creator"
                    value={creator}
                    placeholder='Creator'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    placeholder='Blog Title'
                    onChange={handleChange}
                />
                <textarea
                    name="desc"
                    value={desc}
                    id="desc"
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="hashtags"
                    id="hashtags"
                    value={hashtags}
                    placeholder='Hashtags'
                    onChange={handleChange}
                />
                <FileBase
                    name='selectedFile'
                    type='file'
                    multiple={false}
                    onDone={(file) => handleImg(file)}
                />
                <div className={styles['btns']}>
                    <input className={styles['btn']} type="submit" value='Create Blog' />
                    <input className={styles['btn']} type="reset" value='Clear' />
                </div>
            </form>
        </div>
    )
}

export default NewBlog