import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');
console.log(token);

if (token)
  instance.defaults.headers.common['x-access-token'] = token;
export default { 
    getCustomers() {},
    getCustomer() {},
    addCustomer() {},
    updateCustomer() {},
    deleteCustomer() {}
}