import api from '../config';
import { getToken } from '../helpers/utility';

export const authService = {
    login,
    logout
}

function login ({obj}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'username': obj.email, 'password': obj.password})
    };
    return fetch(api.url+'login.json', requestOptions).then(response => response.data)
};

function logout () {
    const requestOptions = {
        method: 'GET',
        headers: getToken()
    };
    return fetch(api.url+'logout', requestOptions).then(response => response.data)
};