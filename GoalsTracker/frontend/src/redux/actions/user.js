import axios from 'axios'
import { REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "./types"

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
            'Authorization': 'Token'
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