import { adminApi } from '../../utils/api'
import * as actionTypes from './actionTypes'

export const deleteUser = (userId: string) => async(dispatch: any) => {
    try {
        const response = await adminApi.deleteUser(userId)
        dispatch({
            type: actionTypes.DELETE_USER,
            payload: response.data
        })
    } catch (error: any) {
        dispatch({
            type: actionTypes.ADMIN_ERROR,
            payload: error.response.data.message
        })
    }
}