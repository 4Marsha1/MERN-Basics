import axios from 'axios'
import { CREATE_GOAL_FAILED, CREATE_GOAL_INITIATED, CREATE_GOAL_SUCCESS, DELETE_GOAL_FAILED, DELETE_GOAL_INITIATED, DELETE_GOAL_SUCCESS, LOAD_GOALS_FAILED, LOAD_GOALS_SUCCESS, LOAD_USER_INITIATED, UPDATE_GOAL_FAILED, UPDATE_GOAL_INITIATED, UPDATE_GOAL_SUCCESS } from "./types"

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

export const createGoal = (text, token, cb) => (dispatch) => {
    dispatch({
        type: CREATE_GOAL_INITIATED
    })
    const data = {
        text: text
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.post('http://localhost:5000/api/goals/', data, config)
        .then(res => {
            dispatch({
                type: CREATE_GOAL_SUCCESS,
                payload: res.data
            })
            cb();
        })
        .catch(err => {
            dispatch({
                type: CREATE_GOAL_FAILED,
                payload: { msg: err.message }
            })
        })
}

export const updateGoal = (id, text, token, cb) => (dispatch) => {
    dispatch({
        type: UPDATE_GOAL_INITIATED
    })
    const data = {
        text: text
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.put(`http://localhost:5000/api/goals/${id}`, data, config)
        .then((res) => {
            dispatch({
                type: UPDATE_GOAL_SUCCESS,
                payload: res.data
            })
            cb();
        })
        .catch(err => {
            dispatch({
                type: UPDATE_GOAL_FAILED,
                payload: { msg: err.message }
            })
        })
}

export const deleteGoal = (id, token, cb) => (dispatch) => {
    dispatch({
        type: DELETE_GOAL_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    axios.delete(`http://localhost:5000/api/goals/${id}`, config)
        .then(res => {
            dispatch({
                type: DELETE_GOAL_SUCCESS,
                payload: { msg: `Deleted goal ${res.data.id}` }
            })
            cb();
        })
        .catch(err => {
            dispatch({
                type: DELETE_GOAL_FAILED,
                payload: { msg: err.message }
            })
        })
}