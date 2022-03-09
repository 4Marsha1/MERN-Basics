import axios from 'axios'
import { LOAD_GOALS_FAILED, LOAD_GOALS_SUCCESS, LOAD_USER_INITIATED } from "./types"

export const loadGoals = (token) => (dispatch) => {
    dispatch({
        type: LOAD_USER_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.get('http://localhost:5000/api/goals/', config)
        .then(res => {
            dispatch({
                type: LOAD_GOALS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOAD_GOALS_FAILED,
                payload: { msg: err.message }
            })
        })
}