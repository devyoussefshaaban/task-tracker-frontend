import { toast } from 'react-toastify'
import * as actionTypes from '../actions/actionTypes'

const initialState = {}

export const adminReducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.DELETE_USER:
            toast.success(action.payload.message)
            return {...state}
        default:
            return {...state}
    }
}

// TODO: Add & integrate admin features