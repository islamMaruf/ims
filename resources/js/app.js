require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Swal from 'sweetalert2'
import { routes } from './routes'
import User from './helpers/User'
import Notification from './helpers/Notification'

Vue.use(VueRouter)

window.User = User
window.Swal = Swal
window.Notification = Notification

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast



const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    router
});
