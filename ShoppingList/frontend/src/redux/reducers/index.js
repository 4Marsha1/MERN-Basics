import { combineReducers } from "redux";
import items from './items';
import users from './users'

const rootReducer = combineReducers({
    itemReducer: items,
    userReducer: users,
})

export default rootReducer;