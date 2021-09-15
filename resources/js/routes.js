let login = require('./components/auth/Login.vue').default
let register = require('./components/auth/Register.vue').default
let forgetPassword = require('./components/auth/ForgetPassword.vue').default
let logout = require('./components/auth/Logout.vue').default
let home = require('./components/home.vue').default




export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forget-password', component: forgetPassword, name: 'forgetPassword' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/home', component: home, name: 'home' }


]

