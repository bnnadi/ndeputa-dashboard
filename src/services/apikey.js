import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    generateApiKey(obj) {
      return instance.post('generateApiKey.json', obj);
    },
    getApiKey(id) {
        return instance.get('apiKey.json', {params : id});
    },
    getApiKeys() {
        return instance.get('apiKeys.json');
    },
 }