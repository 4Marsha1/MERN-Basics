import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles['card']}>
            <img className={styles['img']} src="https://picsum.photos/200" alt="" />
            <div className={styles['content']}>
                <span className={styles['name']}>Product Name</span>
                <span className={styles['desc']}>Product Desc</span>
                <span className={styles['price']}>Product Price</span>
                <span className={styles['locations']}>Product Location</span>
            </div>
        </div>
    )
}

export default Card