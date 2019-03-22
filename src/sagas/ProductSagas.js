import { call, put } from 'redux-saga/effects'
import * as ProductActions from '../actions/ProductActions';

export function* getAllProducts(api, action) {
    
    const response = yield call(api, action.token)
    
    if (response.data.success) {
        yield put(ProductActions.ProductSuccess(response.data.products))
    } else {
        yield put(ProductActions.ProductFailure(response.data.error))
    }
}