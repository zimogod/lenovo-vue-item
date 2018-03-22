import Vue from 'vue';
import Router from 'vue-router';
import axios from './common/interceptors';
import VueAxios from 'vue-axios';
import routes from './routes';
import vueExtend from './common/vueExtend';
import HttpClient from './common/httpClient';
import Layout from './layout';

// import VueLazyload from 'vue-lazyload'
Vue.use(Router);
Vue.use(VueAxios, axios);
Vue.config.silent = false;
Vue.config.devtools = true;

Vue.prototype.HttpClient = HttpClient;
window.HttpClient = HttpClient;
// new Vue({
//     router: new Router({ routes })
// }).$mount("#app");

new Vue({
    components: { Layout },
    router: new Router({ routes }),
    template: '<Layout/>'
}).$mount('#app');