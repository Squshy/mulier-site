import { takeLatest, all } from 'redux-saga/effects';
import * as api from '../services/Api';

/* ------------- Types ------------- */
import { LoginTypes } from '../constants/Types';
import { ProductTypes } from '../constants/Types';

/* ------------- Sagas ------------- */
import { Login } from './LoginSagas';
import { getAllProducts } from './ProductSagas'

export default function* root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, Login, api.Login),
        takeLatest(ProductTypes.PRODUCTS_REQUEST, getAllProducts, api.GetAllProducts)
    ])
}