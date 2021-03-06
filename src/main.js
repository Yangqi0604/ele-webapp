// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import { Indicator } from 'mint-ui';
import store from './store/store';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SIdentify from '@/components/ele-login/sidentify.vue'
Vue.use(SIdentify)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://ele-interface.herokuapp.com/';
Vue.use(MintUI);

Vue.use(ElementUI);



import {
  setCookie,
  getCookie,
  delCookie
} from "./assets/js/cookie.js"

Vue.prototype.$Cookie = {
  setCookie,
  getCookie,
  delCookie
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    // 加载动画
    Indicator.open();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response;
  },
  error => {
    // 错误提醒
    Indicator.close();
    return Promise.reject(error);
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
