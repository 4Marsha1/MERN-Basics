import axios from 'axios';
import { LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS } from './types';

export const loginUser = (email, password) => dispatch => {
    dispatch({
        type: LOGIN_USER_INITIATED
    })
    const data = {
        'email': email,
        'password': password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('http://localhost:5000/api/users/login', data, config)
        .then(res => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_USER_FAILED,
                payload: err.message
            })
        })
}