import Vue from 'vue'
import App from './App.vue';  
import VueRouter from 'vue-router';
import AnimateCSS from 'animate.css';
import { Routes} from  './Routes';
Vue.use(VueRouter);
Vue.use(AnimateCSS);
const router = new VueRouter({
  routes : Routes,
  mode : 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
