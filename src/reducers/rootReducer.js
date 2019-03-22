import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import login from './LoginReducer';
import user from './UserReducer';
import product from './ProductReducer';

export default combineReducers({
    homeReducer,
    login,
    user,
    product
});