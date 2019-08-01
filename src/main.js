import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import locomotiveScroll from 'locomotive-scroll';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueScrollTo);
const scroll = new locomotiveScroll();
