import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/index'
import Phone from '@/container/phoneLogin'
import Home from '@/container/home'
import Find from '@/container/find'
import Zhanhao from '@/container/zhanhao'
import Hy from '@/container/huiyuan'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home/find'
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
        component: Home,
        children: [{
            path: '/home/find',
            name: 'find',
            component: Find,
        }, {
            path: '/home/zhanhao',
            name: 'zhanhao',
            component: Zhanhao,
        }]
    }, {
        path: '/hy',
        name: 'hy',
        component: Hy,
    }]
})