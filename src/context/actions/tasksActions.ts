import * as actionTypes from './actionTypes'
import {CreateTaskRequestBody, tasksApi} from '../../utils/api'

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

export const createTask = (body: CreateTaskRequestBody) => async(dispatch: any) => {
    try {
        const response = await tasksApi.createTask(body)
        dispatch({
            type: actionTypes.CREATE_TASK,
            payload: response.data
        })
    } catch (error: any) {
        dispatch({
            type: actionTypes.TASKS_ERROR,
            payload: error.response.data.message
        })
    }
}

export const deleteTask = (taskId: string) => async(dispatch: any) => {
    try {
        const response = await tasksApi.deleteTask(taskId)
        dispatch({
            type: actionTypes.DELETE_TASK,
            payload: response.data
        })
    } catch (error: any) {
        dispatch({
            type: actionTypes.TASKS_ERROR,
            payload: error.response.data.message
        })
    }
}