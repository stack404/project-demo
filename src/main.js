import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './public/lang/index';
import ElementUI from 'element-ui';
import './assets/icons/svg.js';
import './public/plugins/moment';

// 本地开发环境才开启mock
(process.env.NODE_ENV === 'dev' && require('./mock'));

Vue.config.productionTip = false;
Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) });

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
