import axios from 'axios';
import * as API from '../constants/Api';

export const Login = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(API.URL + API.LOGIN, {
            'email': email,
            'password': password
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}