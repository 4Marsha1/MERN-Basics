import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const CreateUser = () => {

    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    })

    const handleChange = e => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: userName,
        }
        console.log(user);
        axios.post('http://localhost:3000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setUserName('')
    }

    return (
        <div className={styles['container']}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='User Name'
                    name='userName'
                    value={userName}
                    onChange={handleChange}
                />
                <input type="submit" value='Create User' />
            </form>
            <div className={styles['users']}>
                {
                    users === [] ? <></> :
                        users.map(user => {
                            return <span>{user.username}</span>
                        })
                }
            </div>
        </div>
    )
}

export default CreateUser