import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router/index'
// 引入store
import store from '@/store/index'

import { Picker } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Picker);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})