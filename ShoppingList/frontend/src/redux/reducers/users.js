import { LOGIN_USER_FAILED, LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS } from "../actions/types"

const initialState = {
    isAuthenticated: null,
    loggedUser: null,
    msg: '',
    token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_INITIATED:
            return {
                isAuthenticated: false,
                loggedUser: null,
                msg: '',
                token: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                isAuthenticated: true,
                loggedUser: action.payload,
                token: action.payload.token,
                msg: ''
            }
        case LOGIN_USER_FAILED:
            return {
                isAuthenticated: false,
                loggedUser: null,
                msg: action.payload,
                token: null
            }
        default: return state;
    }
}

export default reducer;