import '../style/style.sass';

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './routes/RouteInit';

Vue.use(VueRouter);

const $app = new Vue({ router }).$mount('#app');