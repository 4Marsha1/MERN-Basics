import { CREATE_GOAL_FAILED, CREATE_GOAL_INITIATED, CREATE_GOAL_SUCCESS, LOAD_GOALS_FAILED, LOAD_GOALS_INITIATED, LOAD_GOALS_SUCCESS, UPDATE_GOAL_FAILED, UPDATE_GOAL_INITIATED, UPDATE_GOAL_SUCCESS } from "../actions/types"

const initialState = {
    loadingGoals: null,
    goals: [],
    isGoalsLoaded: null,
    msg: null,

    creatingGoal: null,
    goal: null,
    isGoalCreated: null,

    updatingGoal: null,
    updatedGoal: null,
    isGoalUpdated: null
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
        case CREATE_GOAL_INITIATED:
            return {
                ...state,
                creatingGoal: true,
                goal: null,
                isGoalCreated: null,
            }
        case CREATE_GOAL_SUCCESS:
            return {
                ...state,
                creatingGoal: false,
                goal: action.payload,
                isGoalCreated: true,
            }
        case CREATE_GOAL_FAILED:
            return {
                ...state,
                creatingGoal: false,
                goal: null,
                isGoalCreated: false,
                msg: action.payload.msg
            }
        case UPDATE_GOAL_INITIATED:
            return {
                ...state,
                updatingGoal: true,
                updatedGoal: null,
                isGoalUpdated: null,
            }
        case UPDATE_GOAL_SUCCESS:
            return {
                ...state,
                updatedGoal: false,
                updatedGoal: action.payload,
                isGoalUpdated: true,
            }
        case UPDATE_GOAL_FAILED:
            return {
                ...state,
                updatingGoal: false,
                updatedGoal: null,
                isGoalUpdated: false,
                msg: action.payload.msg
            }
        default: return state
    }
}

export default reducer