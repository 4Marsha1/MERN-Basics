import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../../redux/actions/items';
import Card from '../Card';
import Modal from '../Modal';
import styles from './Home.module.css';

const Home = () => {
    const itemState = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();

    const refresh = () => {
        dispatch(getItems());
    }

    useEffect(() => {
        refresh();
    }, [])

    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open)
    return (
        <div className={styles['container']}>
            <nav className={styles['navbar']}>
                <span className={styles['logo']}>ShopIt</span>
                <div className={styles['links']}>
                    <Link to='/' className={styles['link']}>Cart</Link>
                    <Link to='/login' className={styles['link']}>Login</Link>
                </div>
            </nav>

            <main className={styles['cards']}>
                {
                    itemState.items && itemState.items.map(item => {
                        return <Card key={item.id} card={item} />
                    })
                }
            </main>

            {open && <Modal toggleModal={toggleModal} />}

            <button className={styles['btn']} onClick={() => toggleModal()}>Click</button>
        </div>
    )
}

export default Home