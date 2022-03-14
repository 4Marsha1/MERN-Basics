import { LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "../actions/types"

const initialState = {
    isAuthenticated: null,
    loggedUser: null,
    msg: '',
    token: null,

    signingUp: null,
    isSignUpSuccessful: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_INITIATED:
            return {
                ...state,
                isAuthenticated: false,
                loggedUser: null,
                msg: '',
                token: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loggedUser: action.payload,
                token: action.payload.token,
                msg: ''
            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                loggedUser: null,
                msg: action.payload,
                token: null
            }
        case REGISTER_USER_INITIATED:
            return {
                ...state,
                signingUp: true,
                isSignUpSuccessful: false,
                token: null
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loggedUser: action.payload,
                token: action.payload.token,
                msg: '',
                signingUp: false,
                isSignUpSuccessful: true,
            }
        case REGISTER_USER_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                loggedUser: null,
                msg: action.payload,
                token: null,
                signingUp: false,
                isSignUpSuccessful: false,
            }
        default: return state;
    }
}

export default reducer;