import { takeLatest, all } from 'redux-saga/effects';
import * as api from '../services/Api';

/* ------------- Types ------------- */
import { LoginTypes } from '../constants/Types';

/* ------------- Sagas ------------- */
import { Login } from './LoginSagas';

export default function* root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, Login, api.Login)
    ])
}