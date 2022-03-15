import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './MyCart.module.css';

const MyCart = () => {
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userState.token) {
            navigate('/')
        }
    }, [])
    return (
        <div className={styles['container']}>
            <Link className={styles['back-btn']} to='/'>
                Back to Shopping
            </Link>
            <div className={styles['info']}>
                <span className={styles['name']}>NAME</span>
                <span className={styles['name']}>Email</span>
            </div>

            <div className={styles['cart']}>
                xyz
            </div>
        </div>
    )
}

export default MyCart