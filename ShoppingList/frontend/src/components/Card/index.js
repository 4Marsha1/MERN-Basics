import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/items';
import styles from './Card.module.css';

const Card = ({ card, userType, toggleModal, refresh }) => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userReducer);
    const deleteCard = (id) => {
        dispatch(deleteItem(id, userState.token))
        setTimeout(() => refresh(), 2000)
    }
    return (
        <div className={styles['card']}>
            {card.image ? <img className={styles['img']} src={card.image} alt="" /> :
                <img className={styles['img']} src="https://picsum.photos/200" alt="" />}

            <div className={styles['content']}>
                <span className={styles['name']}>{card.name}</span>
                <span className={styles['desc']}>{card.desc}</span>
                <span className={styles['price']}>₹ {card.price}</span>
                <span className={styles['location']}>{card.city}, {card.state}</span>
                <div className={styles['btns']}>
                    {
                        userType === 0 ?
                            <>
                                <button className={styles['btn']} onClick={() => toggleModal('edit', card)}>Edit Item</button>
                                <button className={styles['btn']} onClick={() => deleteCard(card._id)}>Delete Item</button>
                            </> : userType === 1 ?
                                <button className={styles['btn']}>Add to Cart</button> : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card