import api from '../config';
import { getToken } from '../helpers/utility';
import Log from '../helpers/Log';

const token = getToken();
Log.info(token, 'Get Token')
if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export const apiService = {
    generateApiKey,
    getApiKey,
    getApiKeys
};

function generateApiKey(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
    };
  return fetch('generateApiKey.json', obj);
};

function getApiKey(id) {
    const requestOptions = {
        method: 'GET',
        headers: getToken()
      };
   return fetch('apiKey.json', {params : id}, requestOptions);
};

function getApiKeys() {
    const requestOptions = {
        method: 'GET',
        headers: getToken()
      };
    return fetch('apiKeys.json', requestOptions);
};