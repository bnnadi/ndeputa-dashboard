import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    getUser() {
      return instance.get('employee.json')
    },
    updateUser() {
      return instance.put('employee.json')
    },
    addPhone() {
      return instance.post('employee.json')
    },
    addAddress() {
      return instance.post('employee.json')
    },
    updatePhone() {
      return instance.put('employee.json')
    },
    updateAddress() {
      return instance.put('employee.json')
    },
    removePhone() {
      return instance.put('employee.json')
    },
    removeAddress() {
      return instance.put('employee.json')
    },
    deleteUser(id) {
      return instance.delete('employee/'+id+'.json')
    },
 }