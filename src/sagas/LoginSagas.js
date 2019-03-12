import { call, put } from 'redux-saga/effects'
import * as LoginActions from '../actions/LoginActions';
import * as UserActions from '../actions/UserActions';

export function* Login(api, action) {
    
    const response = yield call(api, action.payload.email, action.payload.password)
    
    if (response.data.success) {
        yield put(LoginActions.LoginSuccess())
        yield put(UserActions.SetUserInfo(response.data))
    } else {
        yield put(LoginActions.LoginFailure(response.data.error))
    }
}