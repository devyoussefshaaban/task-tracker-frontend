import { Task } from '../../models/Task'
import * as actionTypes from '../actions/actionTypes'

const initialState:{
    tasks: Task[]
} = {
    tasks: []
}

const tasksReducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.GET_MY_TASKS:
            return {...state, tasks: action.payload.data}
        default:
            return {
                ...state
            }
    }
}

export default tasksReducer