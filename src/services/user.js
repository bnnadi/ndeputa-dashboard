import instance from './base';

export default {
    getUser() {
      return instance.get('employee.json')
    },
    updateUser() {
      return instance.put('employee.json')
    },
    addPhone(id) {
      return instance.post('employee/'+id+'/addAddress.json')
    },
    addAddress(id) {
      return instance.post('employee/'+id+'/addAddress.json')
    },
    updatePhone(id) {
      return instance.put('employee/'+id+'/updateAddress.json')
    },
    updateAddress(id) {
      return instance.put('employee/'+id+'/updateAddress.json')
    },
    removePhone(id) {
      return instance.put('employee/'+id+'/removeAddress.json')
    },
    removeAddress(id) {
      return instance.put('employee/'+id+'/removeAddress.json')
    },
    deleteUser(id) {
      return instance.delete('employee/'+id+'.json')
    },
 }