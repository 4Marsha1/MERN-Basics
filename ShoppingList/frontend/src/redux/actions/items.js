import axios from 'axios'
import { GET_ITEMS_FAILED, GET_ITEMS_INITIATED, GET_ITEMS_SUCCESS } from "./types"

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