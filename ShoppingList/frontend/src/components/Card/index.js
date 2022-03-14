import styles from './Card.module.css';

const Card = ({ card }) => {
    return (
        <div className={styles['card']}>
            {card.image ? <img className={styles['img']} src={card.image} alt="" /> :
                <img className={styles['img']} src="https://picsum.photos/200" alt="" />}

            <div className={styles['content']}>
                <span className={styles['name']}>{card.name}</span>
                <span className={styles['desc']}>{card.desc}</span>
                <span className={styles['price']}>₹ {card.price}</span>
                <span className={styles['location']}>{card.city}, {card.state}</span>
            </div>
        </div>
    )
}

export default Card