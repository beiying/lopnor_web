import Vue from 'vue'
import router from "./router";
import App from './App.vue';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/border.css';
import './assets/styles/reset.css';
import './assets/styles/iconfont.css';
import 'swiper/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: "#app",
//   router,
//   components: {App},
//   template: '<App/>'
// });