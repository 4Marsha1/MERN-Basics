import axios from 'axios'
import { CREATE_BLOG_FAILED, CREATE_BLOG_INITIATED, CREATE_BLOG_SUCCESS, GET_BLOGS_FAILED, GET_BLOGS_INITIATED, GET_BLOGS_SUCCESS, UPDATE_BLOG_FAILED, UPDATE_BLOG_INITIATED, UPDATE_BLOG_SUCCESS, UPDATE_LIKE_FAILED, UPDATE_LIKE_INITIATED, UPDATE_LIKE_SUCCESS } from "./types"

export const getBlogs = () => async (dispatch) => {
    dispatch({
        type: GET_BLOGS_INITIATED
    })
    try {
        const { data } = await axios.get('http://localhost:5000/')
        dispatch({
            type: GET_BLOGS_SUCCESS,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: GET_BLOGS_FAILED,
            payload: err.message
        })
    }
}

export const createBlog = (blog, callback) => async (dispatch) => {
    dispatch({
        type: CREATE_BLOG_INITIATED
    })
    try {
        const { data } = await axios.post('http://localhost:5000/', blog)
        dispatch({
            type: CREATE_BLOG_SUCCESS,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: CREATE_BLOG_FAILED,
            payload: err.message
        })
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    dispatch({
        type: UPDATE_BLOG_INITIATED
    })
    try {
        const { data } = await axios.patch(`https://localhost:5000/${id}`, blog)
        dispatch({
            type: UPDATE_BLOG_SUCCESS,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: UPDATE_BLOG_FAILED,
            payload: err.message
        })
    }
}

// export const updateLike = (id, currentLikes, callback) => dispatch => {
//     dispatch({
//         type: UPDATE_LIKE_INITIATED
//     })
//     const data = {
//         id: id,
//         likes: currentLikes
//     }
//     axios.post(`http://localhost:5000/like`, data, { headers: { 'Content-Type': 'application/json' } })
//         .then(res => {
//             dispatch({
//                 type: UPDATE_LIKE_SUCCESS
//             })
//             callback();
//         })
//         .catch(err => {
//             dispatch({
//                 type: UPDATE_LIKE_FAILED,
//                 payload: err
//             })
//         })
// }