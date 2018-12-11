import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router';
import { routes } from './routes'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import '@/scss/main.scss';

const VueScrollTo = require('vue-scrollto')
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://bino-4a405.firebaseio.com/'



Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo)



new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
