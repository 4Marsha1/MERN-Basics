import { combineReducers } from "redux";
import items from './items'

const rootReducer = combineReducers({
    itemReducer: items,
})

export default rootReducer;