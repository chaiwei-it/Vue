import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router/routers.js'
import ElementUI from 'element-ui'
import iView from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import Header from './components/index/header.vue'
import Footer from './components/index/footer.vue'
import Index from './components/index.vue'
import User from './components/user.vue'
import lang from './assets/language/language.js'
import Validator from 'vue-validator'
import store from './store'

window._v = Vue
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(iView)
Vue.component('cw-header', Header)
Vue.component('cw-footer', Footer)
Vue.component('cw-index', Index)
Vue.component('cw-user', User)
lang.use(Vue)
Vue.use(Validator)
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
