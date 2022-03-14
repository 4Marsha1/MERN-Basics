import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../../redux/actions/items';
import { logoutUser } from '../../redux/actions/users';
import Card from '../Card';
import Modal from '../Modal';
import styles from './Home.module.css';

const Home = () => {
    const userState = useSelector(state => state.userReducer)
    const itemState = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();

    const refresh = () => {
        dispatch(getItems());
    }

    useEffect(() => {
        refresh();
    }, [])

    const [open, setOpen] = useState(false);
    const [type, setType] = useState('create');
    const [card, setCard] = useState(null);
    const toggleModal = (type, card) => {
        setOpen(!open);
        setType(type);
        setCard(card)
    };

    return (
        <div className={styles['container']}>
            <nav className={styles['navbar']}>
                <span className={styles['logo']}>ShopIt</span>
                <div className={styles['links']}>
                    <Link to='/' className={styles['link']}>Cart</Link>
                    {userState.token ? <button onClick={() => dispatch(logoutUser())} className={styles['link']}>Logout</button> :
                        <Link to='/login' className={styles['link']}>Login</Link>}
                </div>
            </nav>

            <main className={styles['cards']}>
                {
                    itemState.items && itemState.items.map((item, idx) => {
                        if (userState.loggedUser && userState.loggedUser.id === '622edcbb479e4a21ee89f948') {
                            return <Card
                                key={idx}
                                card={item}
                                userType={0}
                                toggleModal={toggleModal}
                                refresh={refresh}
                            />
                        } else {
                            return <Card key={idx} card={item} userType={1} />
                        }
                    })
                }
            </main>

            {
                userState.loggedUser && userState.loggedUser.id === '622edcbb479e4a21ee89f948' ?
                    <>
                        {open && <Modal toggleModal={toggleModal} type={type} card={card} refresh={refresh} />}
                        <button className={styles['btn']}
                            onClick={() => toggleModal('create', { name: '', price: '', desc: '', state: '', city: '', image: '' })}>
                            Create</button>
                    </> : <></>
            }
        </div>
    )
}

export default Home