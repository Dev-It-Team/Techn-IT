/* Core */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
/* Other libraries */
// Element UI Library (https://element-plus.org/#/en-US)
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';

// set auth header
if (store.state.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
