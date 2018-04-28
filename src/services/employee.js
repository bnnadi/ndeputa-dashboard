import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    getEmployees() {
      return instance.get('employees.json')
    },
    getEmployee() {
      return instance.get('employees.json')
    },
    addEmployee() {
      return instance.post('employees.json')
    },
    updateEmployee() {
      return instance.put('employees.json')
    },
    addPhone() {
      return instance.post('employees.json')
    },
    addAddress() {
      return instance.post('employees.json')
    },
    updatePhone() {
      return instance.put('employees.json')
    },
    updateAddress() {
      return instance.put('employees.json')
    },
    removePhone() {
      return instance.put('employees.json')
    },
    removeAddress() {
      return instance.put('employees.json')
    },
    deleteEmployee(id) {
      return instance.delete('employee/'+id+'.json')
    },
 }