import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router';

const EditExercise = (props) => {

    const location = useLocation();
    const { id } = location.state;

    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/exercises/${id}`)
            .then(res => {
                setUserName(res.data.username)
                setDescription(res.data.description)
                setDuration(res.data.duration)
                setDate(res.data.date)
            })
            .catch(err => console.log(err))
        axios.get('http://localhost:3000/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
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
        axios.post(`http://localhost:3000/exercises/update/${id}`, exercise)
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
                    value='Edit Exercise'
                />
            </form>
        </div>
    )
}

export default EditExercise