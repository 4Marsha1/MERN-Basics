import styles from './Modal.module.css';
import FileBase64 from 'react-file-base64'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createItem, updateItem } from '../../redux/actions/items';

const Modal = ({ toggleModal, type, card, refresh }) => {

    const itemState = useSelector(state => state.itemReducer);
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [item, setItem] = useState({
        name: card.name || '',
        desc: card.desc || '',
        price: card.price || '',
        state: card.state || '',
        city: card.city || '',
        image: card.image || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value })
    }

    const handleFile = (base64) => {
        setItem({ ...item, image: base64 })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.name || !item.desc || !item.price || !item.state || !item.city || !item.image) {
            alert('Incomplete Fields!');
            return;
        }
        if (type === 'edit') {
            dispatch(updateItem(card._id, item.name, item.desc, item.price, item.state, item.city, item.image, userState.token))
        } else if (type === 'create') {
            dispatch(createItem(item.name, item.desc, item.price, item.state, item.city, item.image, userState.token));
        }
        toggleModal();
        setTimeout(() => refresh(), 2000)
    }

    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' value={item.name} onChange={handleChange} />
                <input type="text" name='desc' placeholder='Product Description' value={item.desc} onChange={handleChange} />
                <input type="number" name='price' placeholder='Product Price' value={item.price} onChange={handleChange} />
                <input type="text" name='state' placeholder='Product State' value={item.state} onChange={handleChange} />
                <input type="text" name='city' placeholder='Product City' value={item.city} onChange={handleChange} />
                <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => handleFile(base64)}
                />
                <input type="submit" value='Submit' className={styles['submit']} />
                <button onClick={() => toggleModal()} className={styles['close']}>Close</button>
            </form>
        </div>
    )
}

export default Modal