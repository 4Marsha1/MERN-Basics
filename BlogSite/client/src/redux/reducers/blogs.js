const { GET_BLOGS_INITIATED, GET_BLOGS_SUCCESS, GET_BLOGS_FAILED, CREATE_BLOG_INITIATED, CREATE_BLOG_SUCCESS, CREATE_BLOG_FAILED, UPDATE_LIKE_INITIATED, UPDATE_LIKE_SUCCESS, UPDATE_LIKE_FAILED, UPDATE_BLOG_INITIATED, UPDATE_BLOG_SUCCESS, UPDATE_BLOG_FAILED } = require("../actions/types")

const initialState = {
    loadingBlogs: null,
    blogs: [],
    isLoadSuccessful: null,

    creatingBlog: null,
    isBlogCreated: null,

    updatingBlog: null,
    isBlogUpdated: null,

    updatingLike: null,
    isLikeUpdated: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS_INITIATED:
            return {
                ...state,
                loadingBlogs: true,
                blogs: [],
                isLoadSuccessful: false
            }
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                loadingBlogs: false,
                blogs: action.payload,
                isLoadSuccessful: true,
            }
        case GET_BLOGS_FAILED:
            return {
                ...state,
                loadingBlogs: false,
                blogs: [],
                isLoadSuccessful: false,
            }
        case CREATE_BLOG_INITIATED:
            return {
                ...state,
                creatingBlog: true,
                isBlogCreated: false,
            }
        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
                creatingBlog: false,
                isBlogCreated: true,
            }
        case CREATE_BLOG_FAILED:
            return {
                ...state,
                creatingBlog: false,
                isBlogCreated: false,
            }
        case UPDATE_BLOG_INITIATED:
            return {
                ...state,
                updatingBlog: true,
                isBlogUpdated: false,
            }
        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                updatingBlog: false,
                isBlogUpdated: true,
                blogs: action.payload
            }
        case UPDATE_BLOG_FAILED:
            return {
                ...state,
                updatingBlog: false,
                isBlogUpdated: false,
            }
        case UPDATE_LIKE_INITIATED:
            return {
                ...state,
                updatingLike: true,
                isLikeUpdated: false,
            }
        case UPDATE_LIKE_SUCCESS:
            return {
                ...state,
                updatingLike: false,
                isLikeUpdated: true,
            }
        case UPDATE_LIKE_FAILED:
            return {
                ...state,
                updatingLike: false,
                isLikeUpdated: false,
            }
        default: return state
    }
}

export default reducer