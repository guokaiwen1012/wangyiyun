import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/index'
import Phone from '@/container/phoneLogin'
import Home from '@/container/home'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/login',
        name: 'login',
        component: Login,
    }, {
        path: '/phone',
        name: 'phone',
        component: Phone
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }]
})