import instance from './base';
export default { 
    login ({obj}) {
        return instance.post('login.json', {'username': obj.email, 'password': obj.password}).then(response => response.data)
    },
    logout () {
        return instance.get('logout')
    }
}