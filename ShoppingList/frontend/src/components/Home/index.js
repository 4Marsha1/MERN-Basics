import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Modal from '../Modal';
import styles from './Home.module.css';

const Home = () => {
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
                <Card />
            </main>

            {open && <Modal toggleModal={toggleModal} />}

            <button className={styles['btn']} onClick={() => toggleModal()}>Click</button>
        </div>
    )
}

export default Home