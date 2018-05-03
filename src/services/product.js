import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default { 
    getProducts() {
      return instance.get('products.json');
    },
    getProduct() {
       return instance.get('product.json');
    },
    addProduct() {
       return instance.get('product.json');
    },
    updateProduct() {
       return instance.get('product.json');
    },
    deleteProduct() {
       return instance.get('product/:id.json');
    },
}