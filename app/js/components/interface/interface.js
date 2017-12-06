import ajax from '../../core/ajax.js'

class Interface {
    loginAjax(body) {
        return ajax.post({url:['/users/login','/users/login1','/users/login2'],"body":body})
    }

    registerAjax(body) {
        return ajax.post('/users/register')
    }

}

export default Interface;