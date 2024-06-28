import { toast } from 'react-toastify'
import { User } from '../../models/User'
import * as actionTypes from '../actions/actionTypes'

const initialState:{
    user: User | null,
    isAuthenticated: boolean
} = {
    user: null,
    isAuthenticated: false
}

const authReducer = (state = initialState, action: {type: string, payload?: any}) => {
    switch(action.type){
        case actionTypes.SIGN_UP:
            toast.success(action.payload.message)
            return {
                ...state, user: action.payload.data
            }
        case actionTypes.SIGN_IN:
            toast.success(action.payload.message)
            return {
                ...state, user: action.payload.data
            }
        case actionTypes.AUTH_FAILED:
            toast.error(action.payload.message)
            return {...state}
        default:
            return {...state}
    }
}

export default authReducer