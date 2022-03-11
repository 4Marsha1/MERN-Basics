import axios from 'axios'
import { LOAD_USER_FAILED, LOAD_USER_INITIATED, LOAD_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "./types"

export const registerUser = (name, email, password1, password2) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_INITIATED
    })
    if (password1 !== password2) {
        dispatch({
            type: REGISTER_USER_FAILED,
            payload: { msg: 'Passwords dont match' }
        })
    }
    const data = {
        name: name,
        email: email,
        password: password1
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    axios.post('http://localhost:5000/api/users/', data, config)
        .then(res => {
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_USER_FAILED,
                payload: { msg: err.message }
            })
        })
}

export const loginUser = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_USER_INITIATED
    })
    const data = {
        email: email,
        password: password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
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
                payload: { msg: err.message }
            })
        })
}

export const loadUser = (token) => (dispatch) => {
    dispatch({
        type: LOAD_USER_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.get('http://localhost:5000/api/users/me', config)
        .then(res => {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOAD_USER_FAILED,
                payload: { msg: err.message }
            })
        })
}