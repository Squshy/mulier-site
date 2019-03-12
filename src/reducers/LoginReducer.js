import { LoginTypes } from '../constants/Types';

const initialState = {
    loginError: null,
    loginFetching: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LoginTypes.LOGIN_REQUEST: 
            return {
                loginError: action.payload.error,
                loginFetching: action.payload.fetching,
            }
        case LoginTypes.LOGIN_SUCCESS: 
            return {
                loginError: action.payload.error,
                loginFetching: action.payload.fetching,
            }
        case LoginTypes.LOGIN_FAILURE: 
            return {
                loginError: action.payload.error,
                loginFetching: action.payload.fetching,
            }
        case LoginTypes.CLEAR_ERROR: 
            return {
                loginError: action.payload.error,
                loginFetching: action.payload.fetching,
            }
        default:
            return state
    }
}