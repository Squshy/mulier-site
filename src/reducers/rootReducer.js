import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import login from './LoginReducer';
import user from './UserReducer';

export default combineReducers({
    homeReducer,
    login,
    user
});