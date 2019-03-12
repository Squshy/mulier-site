import { UserTypes } from '../constants/Types';

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    token: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UserTypes.SET_USER_INFO: 
            return {
                email: action.payload.email,
                token: action.payload.token
            }
        default:
            return state
    }
}