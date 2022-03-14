import { CREATE_ITEM_FAILED, CREATE_ITEM_INITIATED, CREATE_ITEM_SUCCESS, DELETE_ITEM_FAILED, DELETE_ITEM_INITIATED, DELETE_ITEM_SUCCESS, GET_ITEMS_FAILED, GET_ITEMS_INITIATED, GET_ITEMS_SUCCESS, UPDATE_ITEM_FAILED, UPDATE_ITEM_INITIATED, UPDATE_ITEM_SUCCESS } from "../actions/types"

const initialState = {
    loading: null,
    items: [],
    isLoaded: null,
    msg: '',
    isCreating: null,
    isCreated: null,
    item: null,
    isUpdating: null,
    isUpdated: null,
    isDeleting: null,
    isDeleted: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_INITIATED:
            return {
                ...state,
                loading: true,
                items: [],
                isLoaded: false,
                msg: ''
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
                isLoaded: true,
                msg: ''
            }
        case GET_ITEMS_FAILED:
            return {
                ...state,
                loading: false,
                items: [],
                isLoaded: false,
                msg: action.payload
            }
        case CREATE_ITEM_INITIATED:
            return {
                ...state,
                isCreating: true,
                isCreated: false,
                item: null,
            }
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isCreating: false,
                isCreated: true,
                item: action.payload,
            }
        case CREATE_ITEM_FAILED:
            return {
                ...state,
                isCreating: false,
                isCreated: false,
                item: null,
                msg: action.payload
            }
        case UPDATE_ITEM_INITIATED:
            return {
                ...state,
                isUpdating: true,
                isUpdated: false,
                item: null,
            }
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                isUpdated: true,
                item: action.payload,
            }
        case UPDATE_ITEM_FAILED:
            return {
                ...state,
                isUpdating: false,
                isUpdated: false,
                item: null,
                msg: action.payload
            }
        case DELETE_ITEM_INITIATED:
            return {
                ...state,
                isDeleting: true,
                isDeleted: false,
                item: null,
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isDeleting: true,
                isDeleted: false,
                item: action.payload,
            }
        case DELETE_ITEM_FAILED:
            return {
                ...state,
                isDeleting: false,
                isDeleted: false,
                item: null,
                msg: action.payload
            }
        default: return state
    }
}

export default reducer;