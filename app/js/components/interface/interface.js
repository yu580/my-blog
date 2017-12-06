import ajax from '../../core/ajax.js'

class Interface {
    login(body) {
        return ajax.post(['/users/login','/users/login1','/users/login2'],body)
    }

    register() {
        return ajax.post('/users/register')
    }

}

export default Interface;