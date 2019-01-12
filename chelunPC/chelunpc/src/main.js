import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})