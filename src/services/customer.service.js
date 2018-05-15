import instance from './base';
import { getToken } from '../helpers/utility';
import Log from '../helpers/Log';

const token = getToken();
Log.info(token, 'Get Token')
if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default { 
  getCustomers() {
    return instance.get('customers.json')
  },
  getCustomer() {
    return instance.get('customer.json')
  },
  addCustomer() {
    return instance.post('customer.json')
  },
  updateCustomer() {
    return instance.put('customer.json')
  },
  addPhone(id) {
    return instance.post('customer/'+id+'/addAddress.json')
  },
  addAddress(id) {
    return instance.post('customer/'+id+'/addAddress.json')
  },
  updatePhone(id) {
    return instance.put('customer/'+id+'/updateAddress.json')
  },
  updateAddress(id) {
    return instance.put('customer/'+id+'/updateAddress.json')
  },
  removePhone(id) {
    return instance.put('customer/'+id+'/removeAddress.json')
  },
  removeAddress(id) {
    return instance.put('customer/'+id+'/removeAddress.json')
  },
  deleteCustomer(id) {
    return instance.delete('customer/'+id+'.json')
  },
}