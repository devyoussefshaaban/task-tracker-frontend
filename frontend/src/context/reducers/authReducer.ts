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
            return {
                ...state, user: action.payload.data
            }
        case actionTypes.SIGN_IN:
            return {
                ...state, user: action.payload.data
            }
        default:
            return {...state}
    }
}

export default authReducer