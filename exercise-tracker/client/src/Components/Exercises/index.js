import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Exercises.module.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/exercises')
            .then(res => setExercises(res.data))
            .catch(err => console.log(err))
    })

    const deleteExercise = (id) => {
        axios.delete(`http://localhost:3000/exercises/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err));

        setExercises(exercises.filter(el => el._id !== id))
    }

    return (
        <div className={styles['exercises']}>
            {
                exercises === [] ? <></> :
                    exercises.map(exercise => {
                        return (
                            <div className={styles['card']}>
                                <span className={styles['name']}>{exercise.username}</span>
                                <span className={styles['description']}>Activity: {exercise.description}</span>
                                <span className={styles['duration']}>Duration: {exercise.duration}</span>
                                <span className={styles['date']}>{exercise.date}</span>
                                <Link to={`/edit/${exercise._id}`} state={{ id: exercise._id }} style={{ textDecoration: 'none' }}> Edit </Link>
                                <button className={styles['delete']} onClick={() => deleteExercise(exercise._id)}>Delete</button>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Exercises;