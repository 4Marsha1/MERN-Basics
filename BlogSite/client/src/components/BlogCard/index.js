import React from 'react';
import styles from './BlogCard.module.css';
import { ReactComponent as LikeSvg } from '../../icons/like.svg'
import { ReactComponent as DeleteSvg } from '../../icons/trash.svg'
import moment from 'moment'


const BlogCard = ({ id, creator, title, desc, hashtags, createdAt, likes, image, handleLike, setCurrentId }) => {
    let hashString = ''
    hashtags.forEach(tag => {
        hashString += `#${tag} `
    })
    return (
        <div className={styles['card']}>
            <div className={styles['header']}>
                <img className={styles['img']} src={image} />
                <div className={styles['overlay']}>
                    <div className={styles['header-details']}>
                        <span className={styles['creator']}>{creator}</span>
                        <span className={styles['posted']}>{moment(createdAt).fromNow()}</span>
                    </div>
                    <button className={styles['edit-btn']} onClick={() => setCurrentId(id)}>...</button>
                </div>
            </div>
            <div className={styles['body']}>
                <span className={styles['hashtags']}>{hashString}</span>
                <span className={styles['title']}>{title}</span>
                <span className={styles['desc']}>{desc}</span>
                <div className={styles['btns']}>
                    <div className={styles['btn']} onClick={() => handleLike(id, likes)}>
                        <LikeSvg className={styles['svg']} />
                        <span>Like {likes}</span>
                    </div>
                    <div className={styles['btn']}>
                        <DeleteSvg className={styles['svg']} />
                        <span>DELETE </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard