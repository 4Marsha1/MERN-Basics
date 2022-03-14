import { GET_ITEMS_FAILED, GET_ITEMS_INITIATED, GET_ITEMS_SUCCESS } from "../actions/types"

const initialState = {
    loading: null,
    items: [],
    isLoaded: null,
    msg: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_INITIATED:
            return {
                loading: true,
                items: [],
                isLoaded: false,
                msg: ''
            }
        case GET_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                isLoaded: true,
                msg: ''
            }
        case GET_ITEMS_FAILED:
            return {
                loading: false,
                items: [],
                isLoaded: false,
                msg: action.payload
            }
        default: return state
    }
}

export default reducer;