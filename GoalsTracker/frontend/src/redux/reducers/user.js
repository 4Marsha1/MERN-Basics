import { LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "../actions/types"

const initialState = {
    isRegistering: null,
    user: null,
    msg: null,
    isRegistered: null,

    isLoggingIn: null,
    loggedUser: null,
    isLoggedIn: null
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
        default: return state
    }
}

export default reducer