import Vue from 'vue';
import App from './App.vue';
Vue.component('pagination', require('laravel-vue-pagination'));
import { router } from './router';
import store from './store';
import 'bootstrap';

//togglebutton
import { ToggleButton } from 'vue-js-toggle-button'
Vue.component('ToggleButton', ToggleButton)
//togglebuttonfinish

import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
    data: { loading: false },
    router,
    store,
    render: h => h(App)
    }).$mount('#app');
    router.beforeEach((to, from, next) => {
        app.loading = true
        next()
    })
    
    router.afterEach(() => {
        setTimeout(() => app.loading = false, 100) // timeout for demo purposes
    })