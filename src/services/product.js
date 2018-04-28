import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default { 
    getProducts() {
      return instance.get('products.json');
    },
    getProduct() {},
    addProduct() {},
    updateProduct() {},
    deleteProduct() {},
}