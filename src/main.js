import Vue from 'vue';
import App from './App.vue';
import router from './router';
import locomotiveScroll from 'locomotive-scroll';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

const scroll = new locomotiveScroll();
