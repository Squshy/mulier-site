import { UserTypes } from '../constants/Types';

export const SetUserInfo = ( response ) => dispatch => {
    dispatch({
        type: UserTypes.SET_USER_INFO,
        payload: {
            email: response.user.email,
            token: response.token
        }
    })
}