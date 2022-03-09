import { REGISTER_USER_FAILED, REGISTER_USER_INITIATED, REGISTER_USER_SUCCESS } from "../actions/types"

const initialState = {
    isRegistering: null,
    user: null,
    msg: null,
    isRegistered: null,
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
        default: return state
    }
}

export default reducer