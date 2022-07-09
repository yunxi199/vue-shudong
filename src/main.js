import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { createStore } from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './permission'
import store from './store'
Vue.use(ElementUI);

// const store = createStore({
//     state: {
//         count: 0 
//     },
//     mutations: {
//         add (state) {
//             state.count++
//         }
//     }
// })
// console.log(router);
// console.log(store.state.count);
// store.commit('add');
// console.log(store.state.count);

new Vue({
    router,
    store,
    render:h => h(App)
}).$mount("#app")