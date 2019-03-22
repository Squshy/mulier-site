import { LoginTypes } from '../constants/Types';

export const LoginRequest = (email, password) => dispatch => {
    console.log('requested')
    dispatch({
        type: LoginTypes.LOGIN_REQUEST,
        payload: {
            error: null,
            fetching: true,
            email: email,
            password: password
        }
    })
}

export const LoginSuccess = () => dispatch => {
    console.log('Login Successful')
    dispatch({
        type: LoginTypes.LOGIN_SUCCESS,
        payload: {
            error: null,
            fetching: false
        }
    })
}

export const LoginFailure = ( response ) => dispatch => {
    console.log('Login Failed:\n'+response)
    dispatch({
        type: LoginTypes.LOGIN_FAILURE,
        payload: {
            error: response,
            fetching: false
        }
    })
}

export const ClearError = () => dispatch => {
    console.log('Login Error Cleared')
    dispatch({
        type: LoginTypes.CLEAR_ERROR,
        payload: {
            error: null,
            fetching: false
        }
    })
}