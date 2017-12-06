import Base from './core/base.js';
import Login from './components/login/login.js';
import $ from './core/yquery.js';
import Interface from './components//interface/interface.js';
import EventUtil from './core/eventUtil.js'; 

const copyProperties = function (target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
};
const mix = function (...mixins) {
    class Mix { }
    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
};
var log = console.log.bind(console)
class Read extends mix(Login, Base, Interface) {
    constructor() {
        super();
        this.initStatus();
        this.initLoginEvent()
    }
    initStatus(){
        this.login({username:"yu580",password:"123",repassword:"123"})
            .then(function(res){
                log(res)
            })
            .catch(function(res){
                log('123')
            })
    }
    
}

export default Read

let read = new Read()


