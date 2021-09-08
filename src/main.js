import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue';
import VueRouter from 'vue-router';
import AnimateCSS from 'animate.css';
import { Routes } from './Routes';
import Vuelidate from 'vuelidate'
Vue.use(VueRouter);
Vue.use(AnimateCSS);
Vue.use(VueResource);
Vue.use(Vuelidate);
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})