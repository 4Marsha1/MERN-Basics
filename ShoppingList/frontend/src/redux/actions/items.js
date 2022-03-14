import axios from 'axios'
import { CREATE_ITEM_FAILED, CREATE_ITEM_INITIATED, CREATE_ITEM_SUCCESS, DELETE_ITEM_FAILED, DELETE_ITEM_INITIATED, DELETE_ITEM_SUCCESS, GET_ITEMS_FAILED, GET_ITEMS_INITIATED, GET_ITEMS_SUCCESS, UPDATE_ITEM_FAILED, UPDATE_ITEM_INITIATED, UPDATE_ITEM_SUCCESS } from "./types"

export const getItems = () => dispatch => {
    dispatch({
        type: GET_ITEMS_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('http://localhost:5000/api/items', config)
        .then(res => {
            dispatch({
                type: GET_ITEMS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ITEMS_FAILED,
                payload: err.message
            })
        })
}

export const createItem = (name, desc, price, state, city, image, token) => dispatch => {
    dispatch({
        type: CREATE_ITEM_INITIATED
    })
    const data = {
        'name': name,
        'desc': desc,
        'price': price,
        'state': state,
        'city': city,
        'image': image
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.post('http://localhost:5000/api/items/', data, config)
        .then(res => {
            dispatch({
                type: CREATE_ITEM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: CREATE_ITEM_FAILED,
                payload: err.message
            })
        })
}

export const updateItem = (id, name, desc, price, state, city, image, token) => dispatch => {
    dispatch({
        type: UPDATE_ITEM_INITIATED
    })
    const data = {
        'name': name,
        'desc': desc,
        'price': price,
        'state': state,
        'city': city,
        'image': image
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.put(`http://localhost:5000/api/items/${id}`, data, config)
        .then(res => {
            dispatch({
                type: UPDATE_ITEM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_ITEM_FAILED,
                payload: err.message
            })
        })
}

export const deleteItem = (id, token) => dispatch => {
    dispatch({
        type: DELETE_ITEM_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.delete(`http://localhost:5000/api/items/${id}`, config)
        .then(res => {
            dispatch({
                type: DELETE_ITEM_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_ITEM_FAILED,
                payload: err.message
            })
        })
}