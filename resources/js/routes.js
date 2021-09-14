let login = require('./components/auth/Login.vue').default
let register = require('./components/auth/Register.vue').default
let forgetPassword = require('./components/auth/ForgetPassword.vue').default


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forget-password', component: forgetPassword, name: 'forgetPassword' },


]

