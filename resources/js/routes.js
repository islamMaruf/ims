let login = require('./components/auth/Login.vue').default
let register = require('./components/auth/Register.vue').default
let forgetPassword = require('./components/auth/ForgetPassword.vue').default
let logout = require('./components/auth/Logout.vue').default
let home = require('./components/home.vue').default
let employees = require('./components/employee/index.vue').default
let addEmployee = require('./components/employee/create.vue').default
let editEmployee = require('./components/employee/edit.vue').default


export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forget-password', component: forgetPassword, name: 'forgetPassword' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/home', component: home, name: 'home' },
    { path: '/add-employee', component: addEmployee, name: 'add-employee' },
    { path: '/employees', component: employees, name: 'employees' },
    { path: '/edit-employee/:id', component: editEmployee, name: 'edit-employee' }




]

