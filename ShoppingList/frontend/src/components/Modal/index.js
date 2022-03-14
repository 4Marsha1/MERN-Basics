import styles from './Modal.module.css';
import FileBase64 from 'react-file-base64'
import { useState } from 'react';

const Modal = ({ toggleModal }) => {
    const [item, setItem] = useState({
        name: '',
        desc: '',
        price: '',
        state: '',
        city: '',
        image: '',
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
        console.log(item);
    }

    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' onChange={handleChange} />
                <input type="text" name='desc' placeholder='Product Description' onChange={handleChange} />
                <input type="number" name='price' placeholder='Product Price' onChange={handleChange} />
                <input type="text" name='state' placeholder='Product State' onChange={handleChange} />
                <input type="text" name='city' placeholder='Product City' onChange={handleChange} />
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