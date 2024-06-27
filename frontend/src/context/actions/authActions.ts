import { SignUpRequestBody, authApi } from '../../utils/api'
import * as actionTypes from './actionTypes'

export const signUp = (body: SignUpRequestBody) => async(dispatch: any) => {
    try {
        const response = await authApi.signUp(body)
        const {data} = response
        dispatch({
            type: actionTypes.SIGN_UP,
            payload: data
        })
    } catch (error) {
        console.log(`SIGN UP ERROR: ${error}`)
    }
}