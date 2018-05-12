import instance from './base';

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