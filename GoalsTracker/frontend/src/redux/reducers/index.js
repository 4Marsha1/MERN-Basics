import { combineReducers } from "redux";
import user from './user';
import goals from './goals'

const rootReducer = combineReducers({
    userReducer: user,
    goalReducer: goals,
})

export default rootReducer
