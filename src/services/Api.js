import axios from 'axios';
import * as API from '../constants/Api';

export const Login = (email, password) => {
    return new Promise((resolve) => {
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

export const GetAllProducts = (token) => {
    console.log('Get all products: ' + token)
    return new Promise((resolve) => {
        axios.get(API.URL + API.PRODUCTS.GET_ALL, {
            headers: {
                'Authorization': token
            }
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            resolve(err.response)
        })
    })
}