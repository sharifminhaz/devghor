import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d)

Vue.use(VueRouter)

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  render: h => h(App),
}).$mount('#app')


