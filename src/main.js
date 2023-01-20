import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import instance from './http/index'
import './assets/style.css'

Vue.config.productionTip = false
Vue.prototype.$http = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
