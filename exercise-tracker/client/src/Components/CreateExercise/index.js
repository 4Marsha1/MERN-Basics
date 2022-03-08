import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const CreateExercise = () => {

    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
        if (users.length > 0)
            setUserName(users[0].username)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'userName': setUserName(value); break;
            case 'description': setDescription(value); break;
            case 'duration': setDuration(value); break;
            case 'date': setDate(value); break;
            default: break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: userName,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        axios.post('http://localhost:3000/exercises/add', exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        window.location.href = '/'
    }

    return (
        <div className={styles['container']}>
            <form onSubmit={handleSubmit}>
                <select name="userName" onChange={handleChange}>
                    {
                        users.map(user => {
                            return <option value={user.username}>{user.username}</option>
                        })
                    }
                </select>
                <input
                    type="text"
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder='Duration'
                    name='duration'
                    value={duration}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder='Date'
                    name='date'
                    value={date}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value='Create Exercise'
                />
            </form>
        </div>
    )
}

export default CreateExercise