import { ProductTypes } from '../constants/Types';

export const ProductRequest = (token) => dispatch => {
    dispatch({
        type: ProductTypes.PRODUCTS_REQUEST,
        payload: {
            error: null,
            fetching: true
        }
    })
}

export const ProductSuccess = (products) => dispatch => {
    dispatch({
        type: ProductTypes.PRODUCTS_SUCCESS,
        payload: {
            error: null,
            fetching: false,
            products: products
        }
    })
}

export const ProductFailure = ( response ) => dispatch => {
    dispatch({
        type: ProductTypes.PRODUCTS_FAILURE,
        payload: {
            error: response,
            fetching: false
        }
    })
}