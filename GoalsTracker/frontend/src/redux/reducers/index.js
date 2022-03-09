import { combineReducers } from "redux";
import user from './user';

const rootReducer = combineReducers({
    userReducer: user
})

export default rootReducer
