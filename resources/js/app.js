require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import User from './helpers/User'

Vue.use(VueRouter)
window.User = User

const router = new VueRouter({
    routes,
    mode: 'history'
})
const app = new Vue({
    el: '#app',
    router
});
