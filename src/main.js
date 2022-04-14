import Vue from 'vue';
import App from './App.vue'
import './style/layout.css'
import './style/reset.less'
import router from './router/index.js'
import request from './api/request.js'
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.prototype.$httpGet = request.httpGet;
Vue.prototype.$httpPost = request.httpPost;
Vue.use(Vant);
Vue.use(Toast);

new Vue({
    el: "#app",
    render: h => h(App),
    router
})

