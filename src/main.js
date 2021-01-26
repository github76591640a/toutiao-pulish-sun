import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/mock/login.js'

Vue.use(Elementui)

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
