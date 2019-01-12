import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/index';
import { goLogin } from '@/api/index';
Vue.use(VueRouter);

// 引入路由组件
const IndexPage = () =>
    import ('@/pages/Index');
const Shou = () =>
    import ('@/pages/shou');
const Canvas = () =>
    import ('@/pages/canvas');
const router = new VueRouter({
    routes: [{
        path: '/index',
        component: IndexPage
    }, {
        path: '/shou',
        component: Shou
    }, {
        path: '/canvas',
        component: Canvas
    }, {
        path: '*',
        redirect: '/index'
    }]
})

//跳转之前
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next();
    } else {
        goLogin();
    }
    next();
})

// 跳转之后
router.afterEach((to, from) => {

})

export default router;