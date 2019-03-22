import { ProductTypes } from '../constants/Types';

const initialState = {
    productError: null,
    productFetching: null,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ProductTypes.PRODUCTS_REQUEST: 
            return {
                ...initialState,
                productError: action.payload.error,
                productFetching: action.payload.fetching,
            }
        case ProductTypes.PRODUCTS_SUCCESS: 
            return {
                ...initialState,
                productError: action.payload.error,
                productFetching: action.payload.fetching,
                products: action.payload.products
            }
        case ProductTypes.PRODUCTS_FAILURE: 
            return {
                ...initialState,
                productError: action.payload.error,
                productFetching: action.payload.fetching,
            }
        default:
            return state
    }
}