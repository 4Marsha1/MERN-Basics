import { LOAD_GOALS_FAILED, LOAD_GOALS_INITIATED, LOAD_GOALS_SUCCESS } from "../actions/types"

const initialState = {
    loadingGoals: null,
    goals: [],
    isGoalsLoaded: null,
    msg: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GOALS_INITIATED:
            return {
                ...state,
                loadingGoals: true,
                goals: [],
                isGoalsLoaded: null,
                msg: null
            }
        case LOAD_GOALS_SUCCESS:
            return {
                ...state,
                loadingGoals: false,
                goals: action.payload,
                isGoalsLoaded: true,
                msg: null
            }
        case LOAD_GOALS_FAILED:
            return {
                ...state,
                loadingGoals: false,
                goals: [],
                isGoalsLoaded: false,
                msg: action.payload.msg
            }
        default: return state
    }
}

export default reducer