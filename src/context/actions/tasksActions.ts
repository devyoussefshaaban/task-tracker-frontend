import * as actionTypes from './actionTypes'
import {tasksApi} from '../../utils/api'

export const getMyTasks = () => async(dispatch: any) => {
    try {
        const response = await tasksApi.getMyTasks();
        dispatch({
            type: actionTypes.GET_MY_TASKS,
            payload: response.data
        })
    } catch (error: any) {
        dispatch({
            type: actionTypes.TASKS_ERROR,
            payload: error.response.data.message
        })
    }
}