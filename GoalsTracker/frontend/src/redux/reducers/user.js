import { LOAD_USER_FAILED, LOAD_USER_INITIATED, LOAD_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "../actions/types"

const initialState = {
    isRegistering: null,
    user: null,
    msg: null,
    isRegistered: null,
    isLoggingIn: null,
    loggedUser: null,
    isLoggedIn: null,
    isLoading: null,
    loadedUser: null,
    isLoaded: null,
    token: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_INITIATED:
            return {
                ...state,
                isRegistering: true,
                user: null,
                msg: null,
                isRegistered: false
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                user: action.payload,
                token: action.payload.token,
                msg: null,
                isRegistered: true
            }
        case REGISTER_USER_FAILED:
            return {
                ...state,
                isRegistering: false,
                user: null,
                msg: action.payload.msg,
                isRegistered: false
            }
        case LOGIN_USER_INITIATED:
            return {
                ...state,
                isLoggingIn: true,
                loggedUser: null,
                isLoggedIn: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                loggedUser: action.payload,
                token: action.payload.token,
                isLoggedIn: true
            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isLoggingIn: false,
                loggedUser: null,
                isLoggedIn: false,
                msg: action.payload.msg
            }
        case LOAD_USER_INITIATED:
            return {
                ...state,
                isLoading: true,
                loadedUser: null,
                isLoaded: false
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loadedUser: action.payload,
                isLoaded: true
            }
        case LOAD_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                loadedUser: null,
                isLoaded: false,
                msg: action.payload.msg
            }
        default: return state
    }
}

export default reducer